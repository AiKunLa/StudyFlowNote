import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException, ForbiddenException, NotFoundException } from '@nestjs/common';
import { MaterialController } from './material.controller';
import { MaterialService } from './material.service';
import { MaterialStatus, MaterialType } from '@prisma/client';
import { ResponseDto } from '../../common/dto/response.dto';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';

describe('MaterialController', () => {
  let controller: MaterialController;
  let service: MaterialService;

  const mockMaterialService = {
    create: jest.fn(),
    findOne: jest.fn(),
    findByProject: jest.fn(),
    updateStatus: jest.fn(),
    getUploadPath: jest.fn(),
    validateProjectAccess: jest.fn(),
    validateOwnership: jest.fn(),
  };

  const mockUser: JwtPayload = {
    sub: 'user-123',
    email: 'test@example.com',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaterialController],
      providers: [
        {
          provide: MaterialService,
          useValue: mockMaterialService,
        },
      ],
    }).compile();

    controller = module.get<MaterialController>(MaterialController);
    service = module.get<MaterialService>(MaterialService);

    jest.clearAllMocks();
  });

  describe('upload', () => {
    const projectId = 'project-123';

    it('should create material with UPLOADING status and return 202', async () => {
      const mockMaterial = {
        id: 'material-123',
        projectId,
        title: 'Test.pdf',
        type: MaterialType.PDF,
        status: MaterialStatus.UPLOADING,
        sourcePath: null,
        rawText: null,
        parseError: null,
        metadata: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockMaterialService.create.mockResolvedValue(mockMaterial);
      mockMaterialService.getUploadPath.mockReturnValue('/uploads/material-123');

      const mockFile: Express.Multer.File = {
        fieldname: 'file',
        originalname: 'Test.pdf',
        encoding: '7bit',
        mimetype: 'application/pdf',
        size: 1024,
        buffer: Buffer.from('test content'),
        stream: null as any,
        destination: '',
        filename: '',
        path: '',
      };

      const result = await controller.upload(
        { title: 'Test.pdf', projectId },
        mockFile,
        mockUser,
      );

      expect(result.code).toBe(0);
      expect((result.data as any).status).toBe(MaterialStatus.UPLOADING);
      expect((result.data as any).id).toBe('material-123');
    });

    it('should throw BadRequestException when file is missing', async () => {
      const mockFile = undefined;

      await expect(
        controller.upload(
          { title: 'Test.pdf', projectId },
          mockFile as any,
          mockUser,
        ),
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe('getStatus', () => {
    it('should return material status when user owns the project', async () => {
      const mockMaterial = {
        id: 'material-123',
        projectId: 'project-123',
        status: MaterialStatus.PARSING,
      };
      mockMaterialService.findOne.mockResolvedValue(mockMaterial);
      mockMaterialService.validateOwnership.mockResolvedValue(true);

      const result = await controller.getStatus('material-123', mockUser);

      expect((result.data as any).status).toBe(MaterialStatus.PARSING);
    });

    it('should throw ForbiddenException when user does not own the material project', async () => {
      mockMaterialService.validateOwnership.mockRejectedValue(
        new ForbiddenException('Not authorized to access this material'),
      );

      await expect(
        controller.getStatus('material-123', mockUser),
      ).rejects.toThrow(ForbiddenException);
    });

    it('should throw NotFoundException when material not found', async () => {
      mockMaterialService.validateOwnership.mockRejectedValue(
        new NotFoundException('Material not found'),
      );

      await expect(
        controller.getStatus('non-existent', mockUser),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('list', () => {
    it('should return paginated materials when user owns the project', async () => {
      const mockResult = {
        items: [
          {
            id: 'material-1',
            projectId: 'project-123',
            title: 'Material 1',
            type: MaterialType.PDF,
            status: MaterialStatus.READY,
          },
        ],
        total: 1,
        page: 1,
        pageSize: 20,
      };
      mockMaterialService.validateProjectAccess.mockResolvedValue(true);
      mockMaterialService.findByProject.mockResolvedValue(mockResult);

      const result = await controller.list(
        { projectId: 'project-123', page: 1, pageSize: 20 },
        mockUser,
      );

      expect((result.data as any).items).toHaveLength(1);
      expect((result.data as any).total).toBe(1);
    });

    it('should throw ForbiddenException when user does not own the project', async () => {
      mockMaterialService.validateProjectAccess.mockResolvedValue(false);

      await expect(
        controller.list(
          { projectId: 'project-123', page: 1, pageSize: 20 },
          mockUser,
        ),
      ).rejects.toThrow(ForbiddenException);
    });
  });
});
