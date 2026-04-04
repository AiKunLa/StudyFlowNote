import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException, ForbiddenException, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { MaterialService } from './material.service';
import { MaterialStatus, MaterialType } from '@prisma/client';
import { Queue } from 'bull';
import * as fs from 'fs/promises';
import * as path from 'path';

describe('MaterialService', () => {
  let service: MaterialService;
  let prismaService: PrismaService;
  let mockQueue: Partial<Queue>;

  const mockPrismaService = {
    material: {
      create: jest.fn(),
      findUnique: jest.fn(),
      findMany: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      count: jest.fn(),
    },
    project: {
      findUnique: jest.fn(),
    },
  };

  const mockConfigService = {
    get: jest.fn().mockReturnValue('./uploads'),
  };

  beforeEach(async () => {
    mockQueue = {
      add: jest.fn().mockResolvedValue({ id: 'job-123' }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MaterialService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
        {
          provide: ConfigService,
          useValue: mockConfigService,
        },
        {
          provide: 'BullQueue_material',
          useValue: mockQueue,
        },
      ],
    }).compile();

    service = module.get<MaterialService>(MaterialService);
    prismaService = module.get<PrismaService>(PrismaService);

    jest.clearAllMocks();
  });

  describe('create', () => {
    const userId = 'user-123';
    const projectId = 'project-123';
    const mockProject = { id: projectId, userId, name: 'Test Project' };

    const createMaterialDto = {
      projectId,
      title: 'Test Material',
      type: MaterialType.PDF,
    };

    it('should throw BadRequestException when project does not exist', async () => {
      mockPrismaService.project.findUnique.mockResolvedValue(null);

      await expect(
        service.create(createMaterialDto, userId),
      ).rejects.toThrow(BadRequestException);
    });

    it('should throw BadRequestException when user is not the project owner', async () => {
      mockPrismaService.project.findUnique.mockResolvedValue({
        ...mockProject,
        userId: 'different-user',
      });

      await expect(
        service.create(createMaterialDto, userId),
      ).rejects.toThrow(BadRequestException);
    });

    it('should create material with UPLOADING status', async () => {
      mockPrismaService.project.findUnique.mockResolvedValue(mockProject);
      const createdMaterial = {
        id: 'material-123',
        projectId,
        title: 'Test Material',
        type: MaterialType.PDF,
        status: MaterialStatus.UPLOADING,
        sourcePath: null,
        rawText: null,
        parseError: null,
        metadata: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockPrismaService.material.create.mockResolvedValue(createdMaterial);
      mockPrismaService.material.findUnique.mockResolvedValue(createdMaterial);

      const result = await service.create(createMaterialDto, userId);

      expect(result.status).toBe(MaterialStatus.UPLOADING);
      expect(mockPrismaService.material.create).toHaveBeenCalledWith({
        data: {
          projectId,
          title: 'Test Material',
          type: MaterialType.PDF,
          status: MaterialStatus.UPLOADING,
        },
      });
    });

    it('should add processing job to queue after creating material', async () => {
      mockPrismaService.project.findUnique.mockResolvedValue(mockProject);
      const createdMaterial = {
        id: 'material-123',
        projectId,
        title: 'Test Material',
        type: MaterialType.PDF,
        status: MaterialStatus.UPLOADING,
        sourcePath: null,
        rawText: null,
        parseError: null,
        metadata: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockPrismaService.material.create.mockResolvedValue(createdMaterial);
      mockPrismaService.material.findUnique.mockResolvedValue(createdMaterial);

      await service.create(createMaterialDto, userId);

      expect(mockQueue.add).toHaveBeenCalledWith(
        'process-material',
        { materialId: 'material-123' },
        expect.any(Object),
      );
    });

    it('should include timeout of 60 seconds in job configuration', async () => {
      mockPrismaService.project.findUnique.mockResolvedValue(mockProject);
      const createdMaterial = {
        id: 'material-123',
        projectId,
        title: 'Test Material',
        type: MaterialType.PDF,
        status: MaterialStatus.UPLOADING,
        sourcePath: null,
        rawText: null,
        parseError: null,
        metadata: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockPrismaService.material.create.mockResolvedValue(createdMaterial);
      mockPrismaService.material.findUnique.mockResolvedValue(createdMaterial);

      await service.create(createMaterialDto, userId);

      expect(mockQueue.add).toHaveBeenCalledWith(
        'process-material',
        { materialId: 'material-123' },
        expect.objectContaining({
          timeout: 60000,
          attempts: 3,
        }),
      );
    });
  });

  describe('findOne', () => {
    it('should throw NotFoundException when material does not exist', async () => {
      mockPrismaService.material.findUnique.mockResolvedValue(null);

      await expect(service.findOne('non-existent-id')).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should return material when found', async () => {
      const mockMaterial = {
        id: 'material-123',
        projectId: 'project-123',
        title: 'Test Material',
        type: MaterialType.PDF,
        status: MaterialStatus.READY,
        sourcePath: '/uploads/test.pdf',
        rawText: 'Sample text',
        parseError: null,
        metadata: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockPrismaService.material.findUnique.mockResolvedValue(mockMaterial);

      const result = await service.findOne('material-123');

      expect(result.id).toBe('material-123');
      expect(result.status).toBe(MaterialStatus.READY);
    });
  });

  describe('findByProject', () => {
    it('should return paginated materials for a project', async () => {
      const mockMaterials = [
        {
          id: 'material-1',
          projectId: 'project-123',
          title: 'Material 1',
          type: MaterialType.PDF,
          status: MaterialStatus.READY,
        },
        {
          id: 'material-2',
          projectId: 'project-123',
          title: 'Material 2',
          type: MaterialType.TEXT,
          status: MaterialStatus.UPLOADING,
        },
      ];
      mockPrismaService.material.findMany.mockResolvedValue(mockMaterials);
      mockPrismaService.material.count.mockResolvedValue(2);

      const result = await service.findByProject('project-123', 1, 20);

      expect(result.items).toHaveLength(2);
      expect(result.total).toBe(2);
      expect(result.page).toBe(1);
      expect(result.pageSize).toBe(20);
    });
  });

  describe('updateStatus', () => {
    it('should update material status', async () => {
      const mockMaterial = {
        id: 'material-123',
        status: MaterialStatus.UPLOADING,
      };
      mockPrismaService.material.findUnique.mockResolvedValue(mockMaterial);

      const updatedMaterial = {
        ...mockMaterial,
        status: MaterialStatus.PARSING,
      };
      mockPrismaService.material.update.mockResolvedValue(updatedMaterial);

      const result = await service.updateStatus(
        'material-123',
        MaterialStatus.PARSING,
      );

      expect(result.status).toBe(MaterialStatus.PARSING);
      expect(mockPrismaService.material.update).toHaveBeenCalledWith({
        where: { id: 'material-123' },
        data: { status: MaterialStatus.PARSING },
      });
    });
  });

  describe('getUploadPath', () => {
    it('should return correct upload path for a valid material id', () => {
      const materialId = 'material-123';
      const result = service.getUploadPath(materialId);

      expect(result).toBe('./uploads/material-123');
    });

    it('should sanitize path traversal attempts with ../', () => {
      const maliciousId = '../../../etc/passwd';
      const result = service.getUploadPath(maliciousId);

      // Path should not contain ../ sequences
      expect(result).not.toContain('..');
      // Result should be within upload directory
      expect(result).toMatch(/^\.\/uploads\//);
    });

    it('should sanitize path traversal attempts with ..\\', () => {
      const maliciousId = '..\\..\\..\\etc\\passwd';
      const result = service.getUploadPath(maliciousId);

      // Path should not contain .. sequences
      expect(result).not.toContain('..');
      expect(result).toMatch(/^\.\/uploads\//);
    });

    it('should remove special characters from materialId', () => {
      const maliciousId = 'material<script>alert(1)</script>';
      const result = service.getUploadPath(maliciousId);

      // Should remove dangerous characters from the ID portion
      const idPortion = result.replace('./uploads/', '');
      expect(idPortion).not.toContain('<');
      expect(idPortion).not.toContain('>');
      expect(idPortion).not.toContain('/');
      expect(idPortion).not.toContain('\\');
      expect(result).toMatch(/^\.\/uploads\/[a-zA-Z0-9_*-]+$/);
    });

    it('should only allow alphanumeric, dash, and underscore characters', () => {
      const validIds = [
        'material-123',
        'material_456',
        'MaterialABC',
        '123-456_789',
      ];

      for (const id of validIds) {
        const result = service.getUploadPath(id);
        expect(result).toMatch(/^\.\/uploads\/[a-zA-Z0-9_-]+$/);
      }
    });

    it('should reject empty string materialId', () => {
      expect(() => service.getUploadPath('')).toThrow();
    });

    it('should reject materialId that becomes empty after sanitization', () => {
      const maliciousId = '///...///';
      expect(() => service.getUploadPath(maliciousId)).toThrow();
    });

    it('should handle materialId with only valid special characters', () => {
      const materialId = 'test-material_2024';
      const result = service.getUploadPath(materialId);

      expect(result).toBe('./uploads/test-material_2024');
    });
  });

  describe('validateProjectAccess', () => {
    it('should return true when user owns the project', async () => {
      const projectId = 'project-123';
      const userId = 'user-123';
      mockPrismaService.project.findUnique.mockResolvedValue({
        id: projectId,
        userId,
      });

      const result = await service.validateProjectAccess(projectId, userId);

      expect(result).toBe(true);
    });

    it('should return false when user does not own the project', async () => {
      const projectId = 'project-123';
      const userId = 'user-123';
      mockPrismaService.project.findUnique.mockResolvedValue({
        id: projectId,
        userId: 'different-user',
      });

      const result = await service.validateProjectAccess(projectId, userId);

      expect(result).toBe(false);
    });

    it('should return false when project does not exist', async () => {
      mockPrismaService.project.findUnique.mockResolvedValue(null);

      const result = await service.validateProjectAccess('non-existent', 'user-123');

      expect(result).toBe(false);
    });
  });

  describe('validateOwnership', () => {
    const userId = 'user-123';
    const projectId = 'project-123';
    const materialId = 'material-123';

    it('should return true when user owns the material project', async () => {
      mockPrismaService.material.findUnique.mockResolvedValue({
        id: materialId,
        projectId,
      });
      mockPrismaService.project.findUnique.mockResolvedValue({
        id: projectId,
        userId,
      });

      const result = await service.validateOwnership(materialId, userId);

      expect(result).toBe(true);
    });

    it('should throw ForbiddenException when user does not own the material project', async () => {
      mockPrismaService.material.findUnique.mockResolvedValue({
        id: materialId,
        projectId,
      });
      mockPrismaService.project.findUnique.mockResolvedValue({
        id: projectId,
        userId: 'different-user',
      });

      await expect(
        service.validateOwnership(materialId, userId),
      ).rejects.toThrow(ForbiddenException);
    });

    it('should throw NotFoundException when material does not exist', async () => {
      mockPrismaService.material.findUnique.mockResolvedValue(null);

      await expect(
        service.validateOwnership('non-existent', userId),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('saveFile', () => {
    const materialId = 'material-123';
    const mockFile: Express.Multer.File = {
      fieldname: 'file',
      originalname: 'test-document.pdf',
      encoding: '7bit',
      mimetype: 'application/pdf',
      size: 1024 * 50, // 50KB
      buffer: Buffer.from('mock file content'),
      stream: null as any,
      destination: '',
      filename: '',
      path: '',
    };

    let uploadsDir: string;

    beforeEach(() => {
      uploadsDir = path.join(__dirname, '../../test-uploads');
    });

    afterEach(async () => {
      // Clean up test uploads directory
      try {
        await fs.rm(uploadsDir, { recursive: true, force: true });
      } catch {
        // Ignore cleanup errors
      }
    });

    it('should save file to correct directory', async () => {
      const result = await service.saveFile(materialId, mockFile);

      // Verify file exists
      const exists = await fs.access(result).then(() => true).catch(() => false);
      expect(exists).toBe(true);

      // Verify file content is correct
      const savedContent = await fs.readFile(result);
      expect(savedContent).toEqual(mockFile.buffer);
    });

    it('should preserve original filename base in saved path', async () => {
      const result = await service.saveFile(materialId, mockFile);

      // The base name should be preserved (without extension and UUID)
      expect(result).toContain('test-document');
      expect(result).toMatch(/\.pdf$/);
    });

    it('should generate unique filename to avoid conflicts', async () => {
      const result1 = await service.saveFile(materialId, mockFile);
      const result2 = await service.saveFile(materialId, mockFile);

      // Files should have different names
      expect(result1).not.toBe(result2);

      // Both files should exist
      const exists1 = await fs.access(result1).then(() => true).catch(() => false);
      const exists2 = await fs.access(result2).then(() => true).catch(() => false);
      expect(exists1).toBe(true);
      expect(exists2).toBe(true);
    });

    it('should create directory if not exists', async () => {
      // Ensure directory doesn't exist
      try {
        await fs.rm(path.join(uploadsDir, materialId), { recursive: true, force: true });
      } catch {
        // Ignore
      }

      const result = await service.saveFile(materialId, mockFile);

      const dirExists = await fs.access(path.dirname(result)).then(() => true).catch(() => false);
      expect(dirExists).toBe(true);
      expect(result).toBeDefined();
    });

    it('should handle file extension preservation for .md files', async () => {
      const mdFile: Express.Multer.File = {
        ...mockFile,
        originalname: 'readme.md',
        mimetype: 'text/markdown',
      };

      const result = await service.saveFile(materialId, mdFile);

      expect(result).toMatch(/\.md$/);
    });

    it('should throw error for invalid materialId that fails sanitization', async () => {
      // This ID becomes empty after sanitization, which should throw
      const invalidId = '///...///';

      await expect(service.saveFile(invalidId, mockFile)).rejects.toThrow();
    });

    it('should save file content correctly', async () => {
      const testContent = 'This is test file content with special chars: 中文 🎉';
      const fileWithContent: Express.Multer.File = {
        ...mockFile,
        buffer: Buffer.from(testContent),
      };

      const result = await service.saveFile(materialId, fileWithContent);

      const savedContent = await fs.readFile(result, 'utf-8');
      expect(savedContent).toBe(testContent);
    });
  });

  describe('create with file save', () => {
    const userId = 'user-123';
    const projectId = 'project-123';
    const mockProject = { id: projectId, userId, name: 'Test Project' };

    const createMaterialDto = {
      projectId,
      title: 'Test Material',
      type: MaterialType.PDF,
    };

    const mockFile: Express.Multer.File = {
      fieldname: 'file',
      originalname: 'test.pdf',
      encoding: '7bit',
      mimetype: 'application/pdf',
      size: 1024 * 50,
      buffer: Buffer.from('mock file content'),
      stream: null as any,
      destination: '',
      filename: '',
      path: '',
    };

    it('should save file and update record with file info', async () => {
      mockPrismaService.project.findUnique.mockResolvedValue(mockProject);
      const createdMaterial = {
        id: 'material-123',
        projectId,
        title: 'Test Material',
        type: MaterialType.PDF,
        status: MaterialStatus.UPLOADING,
        sourcePath: null,
        rawText: null,
        parseError: null,
        metadata: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const updatedMaterial = {
        ...createdMaterial,
        sourcePath: '/uploads/material-123/test-uuid.pdf',
        originalFilename: 'test.pdf',
        fileSize: 1024 * 50,
        mimeType: 'application/pdf',
      };
      mockPrismaService.material.create.mockResolvedValue(createdMaterial);
      mockPrismaService.material.update.mockResolvedValue(updatedMaterial);
      mockPrismaService.material.findUnique.mockResolvedValue(updatedMaterial);

      // Mock saveFile
      jest.spyOn(service, 'saveFile').mockResolvedValue('/uploads/material-123/test-uuid.pdf');

      const result = await service.create(createMaterialDto, userId, mockFile);

      expect(service.saveFile).toHaveBeenCalledWith('material-123', mockFile);
      expect(mockPrismaService.material.update).toHaveBeenCalledWith({
        where: { id: 'material-123' },
        data: expect.objectContaining({
          sourcePath: expect.any(String),
          originalFilename: 'test.pdf',
          fileSize: 1024 * 50,
          mimeType: 'application/pdf',
        }),
      });
    });

    it('should throw error when saveFile fails', async () => {
      mockPrismaService.project.findUnique.mockResolvedValue(mockProject);
      const createdMaterial = {
        id: 'material-123',
        projectId,
        title: 'Test Material',
        type: MaterialType.PDF,
        status: MaterialStatus.UPLOADING,
        sourcePath: null,
        rawText: null,
        parseError: null,
        metadata: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockPrismaService.material.create.mockResolvedValue(createdMaterial);

      // Mock saveFile to throw error
      jest.spyOn(service, 'saveFile').mockRejectedValue(new Error('Failed to save file'));

      await expect(service.create(createMaterialDto, userId, mockFile)).rejects.toThrow('Failed to save file');
    });
  });

  describe('updateRawText', () => {
    const mockMaterialId = 'material-123';
    const mockRawText = 'This is extracted text content';

    it('should update rawText and status to READY', async () => {
      const mockMaterial = {
        id: mockMaterialId,
        status: MaterialStatus.PARSING,
        rawText: null,
      };
      mockPrismaService.material.findUnique.mockResolvedValue(mockMaterial);

      const updatedMaterial = {
        ...mockMaterial,
        status: MaterialStatus.READY,
        rawText: mockRawText,
        parseError: null,
      };
      mockPrismaService.material.update.mockResolvedValue(updatedMaterial);

      const result = await service.updateRawText(mockMaterialId, mockRawText);

      expect(result.status).toBe(MaterialStatus.READY);
      expect(result.rawText).toBe(mockRawText);
      expect(mockPrismaService.material.update).toHaveBeenCalledWith({
        where: { id: mockMaterialId },
        data: {
          rawText: mockRawText,
          status: MaterialStatus.READY,
          parseError: null,
        },
      });
    });

    it('should throw NotFoundException when material does not exist', async () => {
      mockPrismaService.material.findUnique.mockResolvedValue(null);

      await expect(
        service.updateRawText(mockMaterialId, mockRawText),
      ).rejects.toThrow(NotFoundException);
    });

    it('should use custom status when provided', async () => {
      const mockMaterial = {
        id: mockMaterialId,
        status: MaterialStatus.PARSING,
        rawText: null,
      };
      mockPrismaService.material.findUnique.mockResolvedValue(mockMaterial);

      const updatedMaterial = {
        ...mockMaterial,
        status: MaterialStatus.UPLOADING,
        rawText: mockRawText,
        parseError: null,
      };
      mockPrismaService.material.update.mockResolvedValue(updatedMaterial);

      const result = await service.updateRawText(mockMaterialId, mockRawText, MaterialStatus.UPLOADING);

      expect(result.status).toBe(MaterialStatus.UPLOADING);
      expect(mockPrismaService.material.update).toHaveBeenCalledWith({
        where: { id: mockMaterialId },
        data: {
          rawText: mockRawText,
          status: MaterialStatus.UPLOADING,
          parseError: null,
        },
      });
    });
  });

  describe('updateParseError', () => {
    const mockMaterialId = 'material-123';
    const mockParseError = 'Failed to parse PDF: Invalid structure';

    it('should update status to FAILED and set parseError', async () => {
      const mockMaterial = {
        id: mockMaterialId,
        status: MaterialStatus.PARSING,
        parseError: null,
      };
      mockPrismaService.material.findUnique.mockResolvedValue(mockMaterial);

      const updatedMaterial = {
        ...mockMaterial,
        status: MaterialStatus.FAILED,
        parseError: mockParseError,
      };
      mockPrismaService.material.update.mockResolvedValue(updatedMaterial);

      const result = await service.updateParseError(mockMaterialId, mockParseError);

      expect(result.status).toBe(MaterialStatus.FAILED);
      expect(result.parseError).toBe(mockParseError);
      expect(mockPrismaService.material.update).toHaveBeenCalledWith({
        where: { id: mockMaterialId },
        data: {
          status: MaterialStatus.FAILED,
          parseError: mockParseError,
        },
      });
    });

    it('should throw NotFoundException when material does not exist', async () => {
      mockPrismaService.material.findUnique.mockResolvedValue(null);

      await expect(
        service.updateParseError(mockMaterialId, mockParseError),
      ).rejects.toThrow(NotFoundException);
    });
  });
});
