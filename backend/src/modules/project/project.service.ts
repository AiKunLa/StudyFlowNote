import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

/**
 * Project Service
 * 处理项目相关的业务逻辑和数据访问
 */
@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * 验证用户是否存在
   * @param userId - 用户ID
   * @throws BadRequestException 用户不存在时抛出
   */
  private async ensureUserExists(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new BadRequestException('userId not found');
    }
  }

  /**
   * 创建项目
   * @param dto - 创建项目的数据传输对象
   * @returns 创建成功后的项目对象
   * @throws BadRequestException 用户不存在时抛出
   */
  async create(dto: CreateProjectDto) {
    await this.ensureUserExists(dto.userId);
    return this.prisma.project.create({
      data: {
        userId: dto.userId,
        name: dto.name,
        description: dto.description ?? null,
        goal: dto.goal ?? null,
        examDate: dto.examDate ? new Date(dto.examDate) : null,
        dailyTimeBudget: dto.dailyTimeBudget ?? null,
        mode: dto.mode ?? null,
      },
    });
  }

  /**
   * 获取项目列表（分页）
   * @param userId - 用户ID
   * @param page - 页码（默认1）
   * @param pageSize - 每页数量（默认20）
   * @returns 分页后的项目列表和总数
   * @throws BadRequestException 用户不存在时抛出
   */
  async list(userId: string, page = 1, pageSize = 20) {
    await this.ensureUserExists(userId);
    const skip = (page - 1) * pageSize;
    const [items, total] = await Promise.all([
      this.prisma.project.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        skip,
        take: pageSize,
      }),
      this.prisma.project.count({ where: { userId } }),
    ]);
    return { items, total, page, pageSize };
  }

  /**
   * 获取单个项目详情
   * @param projectId - 项目ID
   * @returns 项目对象
   * @throws NotFoundException 项目不存在时抛出
   */
  async findOne(projectId: string) {
    const project = await this.prisma.project.findUnique({ where: { id: projectId } });
    if (!project) {
      throw new NotFoundException('project not found');
    }
    return project;
  }

  /**
   * 更新项目
   * @param projectId - 项目ID
   * @param dto - 更新项目的数据传输对象
   * @returns 更新后的项目对象
   * @throws NotFoundException 项目不存在时抛出
   */
  async update(projectId: string, dto: UpdateProjectDto) {
    await this.findOne(projectId);
    return this.prisma.project.update({
      where: { id: projectId },
      data: {
        name: dto.name,
        description: dto.description ?? null,
        goal: dto.goal ?? null,
        examDate: dto.examDate ? new Date(dto.examDate) : null,
        dailyTimeBudget: dto.dailyTimeBudget ?? null,
        mode: dto.mode ?? null,
      },
    });
  }

  /**
   * 删除项目
   * @param projectId - 项目ID
   * @returns 删除结果（true）
   * @throws NotFoundException 项目不存在时抛出
   */
  async remove(projectId: string) {
    await this.findOne(projectId);
    await this.prisma.project.delete({ where: { id: projectId } });
    return true;
  }
}
