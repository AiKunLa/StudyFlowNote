import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MaterialService } from './material.service';
import { ResponseDto } from '../../common/dto/response.dto';
import { CreateMaterialDto } from './dto/create-material.dto';
import { ListMaterialQueryDto } from './dto/list-material-query.dto';
import { AssignMaterialDto } from './dto/assign-material.dto';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { MaterialType } from '@prisma/client';
import { FileExtensionValidator } from '../../common/validators/file-extension.validator';

@ApiTags('materials')
@Controller('materials')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  /**
   * 上传文件并创建素材记录
   * POST /materials/upload
   */
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Upload material file' })
  async upload(
    @Body() dto: CreateMaterialDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 50 * 1024 * 1024 }), // 50MB
          new FileExtensionValidator({ extensions: ['pdf', 'docx', 'txt', 'md'] }),
        ],
        fileIsRequired: true,
      }),
    )
    file: Express.Multer.File,
    @CurrentUser() user: JwtPayload,
  ): Promise<ResponseDto> {
    if (!file) {
      throw new BadRequestException('File is required');
    }

    // 根据文件的 mimetype 确定素材类型
    let type: MaterialType = MaterialType.TEXT;
    if (file.mimetype === 'application/pdf') {
      type = MaterialType.PDF;
    } else if (file.mimetype === 'text/markdown' || file.originalname.endsWith('.md')) {
      type = MaterialType.MARKDOWN;
    }

    const material = await this.materialService.create(
      {
        projectId: dto.projectId,
        title: dto.title || file.originalname,
        type,
      },
      user.sub,
      file,
    );

    return ResponseDto.success(material);
  }

  /**
   * 获取素材处理状态
   * GET /materials/:materialId/status
   */
  @Get(':materialId/status')
  @ApiOperation({ summary: 'Get material processing status' })
  async getStatus(
    @Param('materialId') materialId: string,
    @CurrentUser() user: JwtPayload,
  ): Promise<ResponseDto> {
    await this.materialService.validateOwnership(materialId, user.sub);
    const material = await this.materialService.findOne(materialId);
    return ResponseDto.success({ status: material.status });
  }

  /**
   * 获取素材详情（包括 rawText）
   * GET /materials/:materialId
   */
  @Get(':materialId')
  @ApiOperation({ summary: 'Get material details with rawText' })
  async getOne(
    @Param('materialId') materialId: string,
    @CurrentUser() user: JwtPayload,
  ): Promise<ResponseDto> {
    await this.materialService.validateOwnership(materialId, user.sub);
    const material = await this.materialService.findOne(materialId);
    return ResponseDto.success(material);
  }

  /**
   * 获取项目的素材列表
   * GET /materials?projectId=xxx&page=1&pageSize=20
   */
  @Get()
  @ApiOperation({ summary: 'List materials' })
  async list(
    @Query() query: ListMaterialQueryDto,
    @CurrentUser() user: JwtPayload,
  ): Promise<ResponseDto> {
    const hasAccess = await this.materialService.validateProjectAccess(
      query.projectId,
      user.sub,
    );
    if (!hasAccess) {
      throw new ForbiddenException('Not authorized to access this project');
    }
    const result = await this.materialService.findByProject(
      query.projectId,
      query.page,
      query.pageSize,
    );
    return ResponseDto.success(result);
  }

  /**
   * 获取素材的结构（分块和知识单元）
   * GET /materials/:materialId/structure
   */
  @Get(':materialId/structure')
  @ApiOperation({ summary: 'Get material structure with chunks and knowledge units' })
  async getStructure(
    @Param('materialId') materialId: string,
    @CurrentUser() user: JwtPayload,
  ): Promise<ResponseDto> {
    await this.materialService.validateOwnership(materialId, user.sub);
    const chunks = await this.materialService.getChunksByMaterial(materialId);
    const knowledgeUnits = await this.materialService.getKnowledgeUnitsByMaterial(materialId);
    return ResponseDto.success({ chunks, knowledgeUnits });
  }

  /**
   * 将素材分配到另一个项目
   * POST /materials/:materialId/assign
   */
  @Post(':materialId/assign')
  @ApiOperation({ summary: 'Assign material to another project' })
  async assignToProject(
    @Param('materialId') materialId: string,
    @Body() dto: AssignMaterialDto,
    @CurrentUser() user: JwtPayload,
  ): Promise<ResponseDto> {
    await this.materialService.validateOwnership(materialId, user.sub);
    const material = await this.materialService.assignToProject(materialId, dto.projectId);
    return ResponseDto.success(material);
  }

  /**
   * 删除素材
   * DELETE /materials/:materialId
   */
  @Delete(':materialId')
  @ApiOperation({ summary: 'Delete material' })
  async delete(
    @Param('materialId') materialId: string,
    @CurrentUser() user: JwtPayload,
  ): Promise<ResponseDto> {
    await this.materialService.validateOwnership(materialId, user.sub);
    await this.materialService.delete(materialId);
    return ResponseDto.success(null);
  }
}
