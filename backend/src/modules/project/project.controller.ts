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
  async create(@Body() dto: CreateProjectDto) {
    const data = await this.projectService.create(dto);
    return { code: 0, message: 'ok', data };
  }

  /**
   * 获取项目列表
   * GET /projects
   * @param query - 查询参数（userId, page, pageSize）
   * @returns 分页后的项目列表
   */
  @Get()
  @ApiOperation({ summary: 'List projects' })
  async list(@Query() query: ListProjectQueryDto) {
    const data = await this.projectService.list(
      query.userId,
      query.page,
      query.pageSize,
    );
    return { code: 0, message: 'ok', data };
  }

  /**
   * 获取项目详情
   * GET /projects/:projectId
   * @param projectId - 项目ID
   * @returns 项目详细信息
   */
  @Get(':projectId')
  @ApiOperation({ summary: 'Get project detail' })
  async detail(@Param('projectId') projectId: string) {
    const data = await this.projectService.findOne(projectId);
    return { code: 0, message: 'ok', data };
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
  ) {
    const data = await this.projectService.update(projectId, dto);
    return { code: 0, message: 'ok', data };
  }

  /**
   * 删除项目
   * DELETE /projects/:projectId
   * @param projectId - 项目ID
   * @returns 删除操作结果
   */
  @Delete(':projectId')
  @ApiOperation({ summary: 'Delete project' })
  async remove(@Param('projectId') projectId: string) {
    const data = await this.projectService.remove(projectId);
    return { code: 0, message: 'ok', data };
  }
}
