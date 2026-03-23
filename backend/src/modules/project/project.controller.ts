import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProjectDto } from './dto/create-project.dto';
import { ListProjectQueryDto } from './dto/list-project-query.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectService } from './project.service';
import { ResponseDto } from '../../common/dto/response.dto';
import { Public } from '../auth/decorators/public.decorator';

/**
 * Project Controller
 * 处理项目相关的所有 HTTP 请求
 */
@ApiTags('projects')
@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  /**
   * 创建项目
   * POST /projects
   * @param dto - 创建项目的数据传输对象
   * @returns 创建成功返回项目信息
   */
  @Post()
  @ApiOperation({ summary: 'Create project' })
  async create(@Body() dto: CreateProjectDto): Promise<ResponseDto> {
    // 输出日志以便调试
    console.log('Creating project with data:', dto);
    const data = await this.projectService.create(dto);
    return ResponseDto.success(data);
  }

  /**
   * 获取项目列表
   * GET /projects
   * @param query - 查询参数（userId, page, pageSize）
   * @returns 分页后的项目列表
   */
  @Get()
  @Public()
  @ApiOperation({ summary: 'List projects' })
  async list(@Query() query: ListProjectQueryDto): Promise<ResponseDto> {
    const data = await this.projectService.list(
      query.userId,
      query.page,
      query.pageSize,
    );
    return ResponseDto.success(data);
  }

  /**
   * 获取项目详情
   * GET /projects/:projectId
   * @param projectId - 项目ID
   * @returns 项目详细信息
   */
  @Get(':projectId')
  @Public()
  @ApiOperation({ summary: 'Get project detail' })
  async detail(@Param('projectId') projectId: string): Promise<ResponseDto> {
    const data = await this.projectService.findOne(projectId);
    return ResponseDto.success(data);
  }

  /**
   * 更新项目
   * PUT /projects/:projectId
   * @param projectId - 项目ID
   * @param dto - 更新项目的数据传输对象
   * @returns 更新后的项目信息
   */
  @Put(':projectId')
  @ApiOperation({ summary: 'Update project' })
  async update(
    @Param('projectId') projectId: string,
    @Body() dto: UpdateProjectDto,
  ): Promise<ResponseDto> {
    const data = await this.projectService.update(projectId, dto);
    return ResponseDto.success(data);
  }

  /**
   * 删除项目
   * DELETE /projects/:projectId
   * @param projectId - 项目ID
   * @returns 删除操作结果
   */
  @Delete(':projectId')
  @ApiOperation({ summary: 'Delete project' })
  async remove(@Param('projectId') projectId: string): Promise<ResponseDto> {
    const data = await this.projectService.remove(projectId);
    return ResponseDto.success(data);
  }
}
