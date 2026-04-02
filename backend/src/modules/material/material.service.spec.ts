import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException, ForbiddenException, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { MaterialService } from './material.service';
import { MaterialStatus, MaterialType } from '@prisma/client';
import { Queue } from 'bull';

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

      await service.create(createMaterialDto, userId);

      expect(mockQueue.add).toHaveBeenCalledWith(
        'process-material',
        { materialId: 'material-123' },
        expect.any(Object),
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
});
