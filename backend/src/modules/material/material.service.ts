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
import * as fs from 'fs/promises';
import * as path from 'path';
import { randomUUID } from 'crypto';

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
   * 如果提供了文件，则保存文件并更新素材记录
   */
  async create(dto: CreateMaterialDto, userId: string, file?: Express.Multer.File) {
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

    // 如果提供了文件，保存文件并更新记录
    if (file) {
      const sourcePath = await this.saveFile(material.id, file);
      await this.prisma.material.update({
        where: { id: material.id },
        data: {
          sourcePath,
          originalFilename: file.originalname,
          fileSize: file.size,
          mimeType: file.mimetype,
        },
      });
      this.logger.log(`File saved for material ${material.id}: ${sourcePath}`);
    }

    // 添加处理任务到队列
    await this.materialQueue.add(
      'process-material',
      { materialId: material.id },
      {
        attempts: 3,
        timeout: 60000, // 60 seconds timeout to prevent stuck jobs
        backoff: {
          type: 'exponential',
          delay: 1000,
        },
      },
    );

    return this.findOne(material.id);
  }

  /**
   * 保存文件到磁盘
   * @param materialId 素材ID（用于创建目录）
   * @param file 上传的文件
   * @returns 保存后的文件路径
   */
  async saveFile(materialId: string, file: Express.Multer.File): Promise<string> {
    const uploadPath = this.getUploadPath(materialId);

    // 创建目录（如果不存在）
    await fs.mkdir(uploadPath, { recursive: true });

    // 生成唯一文件名，保留原始扩展名
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext);
    const uniqueFilename = `${baseName}-${randomUUID()}${ext}`;
    const filePath = path.join(uploadPath, uniqueFilename);

    // 写入文件
    await fs.writeFile(filePath, file.buffer);

    return filePath;
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

  /**
   * 更新素材的原始文本内容
   * @param materialId 素材ID
   * @param rawText 提取的原始文本
   * @param status 状态（默认为 READY）
   */
  async updateRawText(
    materialId: string,
    rawText: string,
    status: MaterialStatus = MaterialStatus.READY,
  ) {
    await this.findOne(materialId);

    const updated = await this.prisma.material.update({
      where: { id: materialId },
      data: {
        rawText,
        status,
        parseError: null, // Clear any previous parse error
      },
    });

    this.logger.log(`Material ${materialId} rawText updated, status: ${status}`);

    return updated;
  }

  /**
   * 更新素材的解析错误
   * @param materialId 素材ID
   * @param parseError 错误信息
   */
  async updateParseError(materialId: string, parseError: string) {
    await this.findOne(materialId);

    const updated = await this.prisma.material.update({
      where: { id: materialId },
      data: {
        status: MaterialStatus.FAILED,
        parseError,
      },
    });

    this.logger.error(`Material ${materialId} parse error: ${parseError}`);

    return updated;
  }

  /**
   * 获取素材的分块列表
   * @param materialId 素材ID
   */
  async getChunksByMaterial(materialId: string) {
    await this.findOne(materialId);
    return this.prisma.materialChunk.findMany({
      where: { materialId },
      orderBy: { chunkIndex: 'asc' },
    });
  }

  /**
   * 获取素材的知识单元列表
   * @param materialId 素材ID
   */
  async getKnowledgeUnitsByMaterial(materialId: string) {
    await this.findOne(materialId);
    return this.prisma.knowledgeUnit.findMany({
      where: { materialId },
    });
  }

  /**
   * 将素材分配到另一个项目
   * @param materialId 素材ID
   * @param projectId 目标项目ID
   */
  async assignToProject(materialId: string, projectId: string) {
    // 验证素材存在
    await this.findOne(materialId);

    // 验证目标项目存在且用户有权访问
    const project = await this.prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!project) {
      throw new BadRequestException('Target project not found');
    }

    // 更新素材的项目归属
    return this.prisma.material.update({
      where: { id: materialId },
      data: { projectId },
    });
  }

  /**
   * 删除素材及其关联数据
   * @param materialId 素材ID
   */
  async delete(materialId: string): Promise<void> {
    // 验证素材存在
    const material = await this.findOne(materialId);

    // 删除关联文件（如果存在）
    if (material.sourcePath) {
      try {
        const dirPath = path.dirname(material.sourcePath);
        await fs.rm(dirPath, { recursive: true });
        this.logger.log(`Deleted file directory: ${dirPath}`);
      } catch (error) {
        this.logger.warn(`Failed to delete file directory: ${material.sourcePath}`);
      }
    }

    // Prisma cascade delete 会自动删除关联的 chunks, knowledgeUnits
    await this.prisma.material.delete({ where: { id: materialId } });
    this.logger.log(`Material deleted: ${materialId}`);
  }
}
