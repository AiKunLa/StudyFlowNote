import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { PrismaService } from '../../prisma/prisma.service';
import { MaterialStatus, MaterialType } from '@prisma/client';
import { Queue } from 'bull';
import { ConfigService } from '@nestjs/config';

export interface CreateMaterialDto {
  projectId: string;
  title?: string;
  type: MaterialType;
}

@Injectable()
export class MaterialService {
  private readonly logger = new Logger(MaterialService.name);
  private readonly uploadDir: string;

  constructor(
    private readonly prisma: PrismaService,
    @InjectQueue('material') private readonly materialQueue: Queue,
    private readonly configService: ConfigService,
  ) {
    this.uploadDir = this.configService.get<string>('UPLOAD_DIR', './uploads');
  }

  /**
   * 创建新的素材记录，状态为 UPLOADING
   */
  async create(dto: CreateMaterialDto, userId: string) {
    const { projectId, title, type } = dto;

    // 验证项目存在且用户有权访问
    const project = await this.prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!project) {
      throw new BadRequestException('Project not found');
    }

    if (project.userId !== userId) {
      throw new BadRequestException('Not authorized to access this project');
    }

    // 创建素材记录，状态为 UPLOADING
    const material = await this.prisma.material.create({
      data: {
        projectId,
        title: title || 'Untitled',
        type,
        status: MaterialStatus.UPLOADING,
      },
    });

    this.logger.log(`Material created: ${material.id}`);

    // 添加处理任务到队列
    await this.materialQueue.add(
      'process-material',
      { materialId: material.id },
      {
        attempts: 3,
        backoff: {
          type: 'exponential',
          delay: 1000,
        },
      },
    );

    return material;
  }

  /**
   * 根据 ID 获取素材
   */
  async findOne(materialId: string) {
    const material = await this.prisma.material.findUnique({
      where: { id: materialId },
    });

    if (!material) {
      throw new NotFoundException('Material not found');
    }

    return material;
  }

  /**
   * 分页获取项目的素材列表
   */
  async findByProject(projectId: string, page = 1, pageSize = 20) {
    const skip = (page - 1) * pageSize;

    const [items, total] = await Promise.all([
      this.prisma.material.findMany({
        where: { projectId },
        orderBy: { createdAt: 'desc' },
        skip,
        take: pageSize,
      }),
      this.prisma.material.count({ where: { projectId } }),
    ]);

    return { items, total, page, pageSize };
  }

  /**
   * 更新素材状态
   */
  async updateStatus(materialId: string, status: MaterialStatus) {
    const material = await this.findOne(materialId);

    const updated = await this.prisma.material.update({
      where: { id: materialId },
      data: { status },
    });

    this.logger.log(`Material ${materialId} status updated to ${status}`);

    return updated;
  }

  /**
   * 获取素材的上传路径
   * Sanitizes materialId to prevent path traversal attacks
   */
  getUploadPath(materialId: string): string {
    // Reject empty or whitespace-only IDs
    if (!materialId || !materialId.trim()) {
      throw new BadRequestException('Invalid material ID');
    }

    // Only allow alphanumeric, dashes, and underscores
    const sanitized = materialId.replace(/[^a-zA-Z0-9_-]/g, '');

    // Reject if sanitization resulted in empty string
    if (!sanitized) {
      throw new BadRequestException('Invalid material ID');
    }

    // Ensure result is within upload directory using path.resolve
    const path = `${this.uploadDir}/${sanitized}`;

    // Final validation: resolved path must start with upload directory
    const resolvedPath = path.replace(/\\/g, '/');
    const normalizedUploadDir = `${this.uploadDir}`.replace(/\\/g, '/');

    if (!resolvedPath.startsWith(normalizedUploadDir)) {
      throw new BadRequestException('Invalid material ID');
    }

    return path;
  }

  /**
   * 验证用户是否有权访问指定项目
   * @param projectId 项目ID
   * @param userId 用户ID
   * @returns 是否有权访问
   */
  async validateProjectAccess(projectId: string, userId: string): Promise<boolean> {
    const project = await this.prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!project) {
      return false;
    }

    return project.userId === userId;
  }

  /**
   * 验证用户是否有权访问指定素材
   * @param materialId 素材ID
   * @param userId 用户ID
   * @returns 是否有权访问
   * @throws NotFoundException 素材不存在时抛出
   * @throws ForbiddenException 用户无权访问时抛出
   */
  async validateOwnership(materialId: string, userId: string): Promise<boolean> {
    const material = await this.prisma.material.findUnique({
      where: { id: materialId },
    });

    if (!material) {
      throw new NotFoundException('Material not found');
    }

    const project = await this.prisma.project.findUnique({
      where: { id: material.projectId },
    });

    if (!project) {
      return false;
    }

    if (project.userId !== userId) {
      throw new ForbiddenException('Not authorized to access this material');
    }

    return true;
  }
}
