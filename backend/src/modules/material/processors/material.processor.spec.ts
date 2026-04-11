import { Test, TestingModule } from '@nestjs/testing';
import { Job } from 'bull';
import { MaterialStatus } from '@prisma/client';
import { MaterialProcessor } from './material.processor';
import { ContentExtractor } from './content-extractor';
import { MaterialService } from '../material.service';

describe('MaterialProcessor', () => {
  let processor: MaterialProcessor;
  let contentExtractor: ContentExtractor;
  let materialService: MaterialService;

  const mockMaterialService = {
    findOne: jest.fn(),
    updateStatus: jest.fn(),
    updateRawText: jest.fn(),
    updateParseError: jest.fn(),
  };

  const mockContentExtractor = {
    extract: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MaterialProcessor,
        {
          provide: MaterialService,
          useValue: mockMaterialService,
        },
        {
          provide: ContentExtractor,
          useValue: mockContentExtractor,
        },
      ],
    }).compile();

    processor = module.get<MaterialProcessor>(MaterialProcessor);
    contentExtractor = module.get<ContentExtractor>(ContentExtractor);
    materialService = module.get<MaterialService>(MaterialService);

    jest.clearAllMocks();
  });

  describe('processMaterial', () => {
    const mockMaterialId = 'material-123';
    const mockSourcePath = '/uploads/material-123/test.pdf';
    const mockMimeType = 'application/pdf';
    const mockRawText = 'Extracted text content from PDF';

    const createMockJob = (data: { materialId: string; attempts?: number }) => {
      return {
        id: 'job-123',
        data,
        attemptsMade: data.attempts || 0,
      } as unknown as Job<{ materialId: string }>;
    };

    const createMockMaterial = (overrides = {}) => ({
      id: mockMaterialId,
      projectId: 'project-123',
      title: 'Test Material',
      type: 'PDF' as const,
      sourcePath: mockSourcePath,
      mimeType: mockMimeType,
      status: MaterialStatus.UPLOADING,
      rawText: null,
      parseError: null,
      ...overrides,
    });

    it('should update status to PARSING when starting', async () => {
      const mockMaterial = createMockMaterial();
      mockMaterialService.findOne.mockResolvedValue(mockMaterial);
      mockMaterialService.updateStatus.mockResolvedValue({
        ...mockMaterial,
        status: MaterialStatus.PARSING,
      });
      mockContentExtractor.extract.mockResolvedValue(mockRawText);
      mockMaterialService.updateRawText.mockResolvedValue({
        ...mockMaterial,
        status: MaterialStatus.READY,
        rawText: mockRawText,
      });

      const job = createMockJob({ materialId: mockMaterialId });
      await processor.processMaterial(job);

      expect(materialService.updateStatus).toHaveBeenCalledWith(
        mockMaterialId,
        MaterialStatus.PARSING,
      );
    });

    it('should call content extractor based on file type', async () => {
      const mockMaterial = createMockMaterial({
        mimeType: 'application/pdf',
        sourcePath: '/uploads/material-123/test.pdf',
      });
      mockMaterialService.findOne.mockResolvedValue(mockMaterial);
      mockMaterialService.updateStatus.mockResolvedValue({
        ...mockMaterial,
        status: MaterialStatus.PARSING,
      });
      mockContentExtractor.extract.mockResolvedValue(mockRawText);
      mockMaterialService.updateRawText.mockResolvedValue({
        ...mockMaterial,
        status: MaterialStatus.READY,
        rawText: mockRawText,
      });

      const job = createMockJob({ materialId: mockMaterialId });
      await processor.processMaterial(job);

      expect(contentExtractor.extract).toHaveBeenCalledWith(
        mockSourcePath,
        'application/pdf',
      );
    });

    it('should update material with extracted text on success', async () => {
      const mockMaterial = createMockMaterial();
      mockMaterialService.findOne.mockResolvedValue(mockMaterial);
      mockMaterialService.updateStatus.mockResolvedValue({
        ...mockMaterial,
        status: MaterialStatus.PARSING,
      });
      mockContentExtractor.extract.mockResolvedValue(mockRawText);
      mockMaterialService.updateRawText.mockResolvedValue({
        ...mockMaterial,
        status: MaterialStatus.READY,
        rawText: mockRawText,
      });

      const job = createMockJob({ materialId: mockMaterialId });
      await processor.processMaterial(job);

      expect(materialService.updateRawText).toHaveBeenCalledWith(
        mockMaterialId,
        mockRawText,
        MaterialStatus.READY,
      );
    });

    it('should update status to READY on success', async () => {
      const mockMaterial = createMockMaterial();
      mockMaterialService.findOne.mockResolvedValue(mockMaterial);
      mockMaterialService.updateStatus.mockResolvedValue({
        ...mockMaterial,
        status: MaterialStatus.PARSING,
      });
      mockContentExtractor.extract.mockResolvedValue(mockRawText);
      mockMaterialService.updateRawText.mockResolvedValue({
        ...mockMaterial,
        status: MaterialStatus.READY,
        rawText: mockRawText,
      });

      const job = createMockJob({ materialId: mockMaterialId });
      await processor.processMaterial(job);

      expect(materialService.updateRawText).toHaveBeenCalledWith(
        mockMaterialId,
        mockRawText,
        MaterialStatus.READY,
      );
    });

    it('should update status to FAILED on error', async () => {
      const mockMaterial = createMockMaterial();
      mockMaterialService.findOne.mockResolvedValue(mockMaterial);
      mockMaterialService.updateStatus.mockResolvedValue({
        ...mockMaterial,
        status: MaterialStatus.PARSING,
      });
      const error = new Error('Failed to extract content');
      mockContentExtractor.extract.mockRejectedValue(error);

      const job = createMockJob({ materialId: mockMaterialId });

      await expect(processor.processMaterial(job)).rejects.toThrow(error);
      expect(materialService.updateStatus).toHaveBeenCalledWith(
        mockMaterialId,
        MaterialStatus.FAILED,
      );
    });

    it('should throw error when material not found', async () => {
      mockMaterialService.findOne.mockRejectedValue(
        new Error('Material not found'),
      );

      const job = createMockJob({ materialId: 'non-existent-id' });

      await expect(processor.processMaterial(job)).rejects.toThrow(
        'Material not found',
      );
    });

    it('should throw error when sourcePath is missing', async () => {
      const mockMaterial = createMockMaterial({ sourcePath: null });
      mockMaterialService.findOne.mockResolvedValue(mockMaterial);

      const job = createMockJob({ materialId: mockMaterialId });

      await expect(processor.processMaterial(job)).rejects.toThrow(
        'Source path is missing',
      );
    });

    describe('retry logic', () => {
      it('should respect job attempts configuration', async () => {
        const mockMaterial = createMockMaterial();
        mockMaterialService.findOne.mockResolvedValue(mockMaterial);
        mockMaterialService.updateStatus.mockResolvedValue({
          ...mockMaterial,
          status: MaterialStatus.PARSING,
        });
        const error = new Error('Transient error');
        mockContentExtractor.extract.mockRejectedValue(error);
        mockMaterialService.updateParseError.mockResolvedValue({
          ...mockMaterial,
          status: MaterialStatus.FAILED,
          parseError: error.message,
        });

        // Simulate retry with attemptsMade = 1
        const job = createMockJob({
          materialId: mockMaterialId,
          attempts: 1,
        });

        await expect(processor.processMaterial(job)).rejects.toThrow(error);
        // The job should retry, so we should see the error propagate
        expect(contentExtractor.extract).toHaveBeenCalled();
      });

      it('should record parse error on final failure', async () => {
        const mockMaterial = createMockMaterial();
        mockMaterialService.findOne.mockResolvedValue(mockMaterial);
        mockMaterialService.updateStatus.mockResolvedValue({
          ...mockMaterial,
          status: MaterialStatus.PARSING,
        });
        const error = new Error('All retries exhausted');
        mockContentExtractor.extract.mockRejectedValue(error);

        // Simulate final attempt (3rd try, 0-indexed so attemptsMade = 2)
        const job = createMockJob({
          materialId: mockMaterialId,
          attempts: 2,
        });

        await expect(processor.processMaterial(job)).rejects.toThrow(error);
        expect(materialService.updateStatus).toHaveBeenCalledWith(
          mockMaterialId,
          MaterialStatus.FAILED,
        );
      });
    });

    it('should throw error when mimeType is null (unsupported fallback)', async () => {
      const mockMaterial = createMockMaterial({ mimeType: null });
      mockMaterialService.findOne.mockResolvedValue(mockMaterial);
      mockMaterialService.updateStatus.mockResolvedValue({
        ...mockMaterial,
        status: MaterialStatus.PARSING,
      });

      // Mock extract to throw since mimeType null falls back to application/octet-stream
      mockContentExtractor.extract.mockRejectedValue(
        new Error('Unsupported file type: application/octet-stream'),
      );

      const job = createMockJob({ materialId: mockMaterialId });

      await expect(processor.processMaterial(job)).rejects.toThrow(
        'Unsupported file type: application/octet-stream',
      );
    });

    describe('race condition prevention', () => {
      it('should set status to FAILED even if updateParseError fails', async () => {
        const mockMaterial = createMockMaterial();
        mockMaterialService.findOne.mockResolvedValue(mockMaterial);
        mockMaterialService.updateStatus.mockResolvedValue({
          ...mockMaterial,
          status: MaterialStatus.PARSING,
        });
        const error = new Error('Failed to extract content');
        mockContentExtractor.extract.mockRejectedValue(error);
        // updateParseError fails - this simulates the race condition
        mockMaterialService.updateParseError.mockRejectedValue(
          new Error('Database error'),
        );

        const job = createMockJob({ materialId: mockMaterialId });

        await expect(processor.processMaterial(job)).rejects.toThrow(error);
        // Even though updateParseError failed, status should still be FAILED
        // The fix should ensure FAILED is set before re-throwing
        expect(materialService.updateStatus).toHaveBeenCalledWith(
          mockMaterialId,
          MaterialStatus.FAILED,
        );
      });

      it('should set FAILED status before re-throwing error', async () => {
        const mockMaterial = createMockMaterial();
        mockMaterialService.findOne.mockResolvedValue(mockMaterial);
        mockMaterialService.updateStatus.mockResolvedValue({
          ...mockMaterial,
          status: MaterialStatus.PARSING,
        });
        const error = new Error('Extraction failed');
        mockContentExtractor.extract.mockRejectedValue(error);
        mockMaterialService.updateParseError.mockResolvedValue({
          ...mockMaterial,
          status: MaterialStatus.FAILED,
          parseError: error.message,
        });

        const job = createMockJob({ materialId: mockMaterialId });

        await expect(processor.processMaterial(job)).rejects.toThrow(error);
        // Verify FAILED is set BEFORE the error is re-thrown
        const updateStatusCalls = (materialService.updateStatus as jest.Mock).mock.calls;
        const failedStatusCall = updateStatusCalls.find(
          (call: unknown[]) => call[1] === MaterialStatus.FAILED,
        );
        expect(failedStatusCall).toBeDefined();
      });
    });

    describe('mimeType validation', () => {
      it('should set FAILED status for unsupported mimeType', async () => {
        const mockMaterial = createMockMaterial({
          mimeType: 'application/x-corrupt-pdf',
        });
        mockMaterialService.findOne.mockResolvedValue(mockMaterial);
        mockMaterialService.updateStatus.mockResolvedValue({
          ...mockMaterial,
          status: MaterialStatus.PARSING,
        });

        // Mock extract to throw for unsupported mimeType
        mockContentExtractor.extract.mockRejectedValue(
          new Error('Unsupported file type: application/x-corrupt-pdf'),
        );

        const job = createMockJob({ materialId: mockMaterialId });

        await expect(processor.processMaterial(job)).rejects.toThrow(
          'Unsupported file type: application/x-corrupt-pdf',
        );
        expect(materialService.updateStatus).toHaveBeenCalledWith(
          mockMaterialId,
          MaterialStatus.FAILED,
        );
      });

      it('should pass unsupported mimeType to contentExtractor which handles validation', async () => {
        const mockMaterial = createMockMaterial({
          mimeType: 'image/jpeg', // Not a supported type
        });
        mockMaterialService.findOne.mockResolvedValue(mockMaterial);
        mockMaterialService.updateStatus.mockResolvedValue({
          ...mockMaterial,
          status: MaterialStatus.PARSING,
        });

        // ContentExtractor now handles mimeType validation internally
        mockContentExtractor.extract.mockRejectedValue(
          new Error('Unsupported file type: image/jpeg'),
        );

        const job = createMockJob({ materialId: mockMaterialId });

        await expect(processor.processMaterial(job)).rejects.toThrow(
          'Unsupported file type: image/jpeg',
        );
        // extract IS called - contentExtractor validates mimeType
        expect(contentExtractor.extract).toHaveBeenCalled();
      });
    });
  });

  describe('handleFailure', () => {
    const mockMaterialId = 'material-123';

    const createMockJob = (data: { materialId: string; attempts?: number }) => {
      return {
        id: 'job-123',
        data,
        attemptsMade: data.attempts || 0,
      } as unknown as Job<{ materialId: string }>;
    };

    it('should update parse error when material status is not FAILED', async () => {
      const mockMaterial = {
        id: mockMaterialId,
        status: MaterialStatus.PARSING,
      };
      mockMaterialService.findOne.mockResolvedValue(mockMaterial);
      mockMaterialService.updateParseError.mockResolvedValue({
        ...mockMaterial,
        status: MaterialStatus.FAILED,
      });

      const error = new Error('Job failed');
      const job = createMockJob({ materialId: mockMaterialId, attempts: 3 });

      await processor.handleFailure(job, error);

      expect(materialService.updateParseError).toHaveBeenCalledWith(
        mockMaterialId,
        expect.stringContaining('Job failed'),
      );
    });

    it('should not update parse error when material status is already FAILED', async () => {
      const mockMaterial = {
        id: mockMaterialId,
        status: MaterialStatus.FAILED,
      };
      mockMaterialService.findOne.mockResolvedValue(mockMaterial);

      const error = new Error('Job failed');
      const job = createMockJob({ materialId: mockMaterialId, attempts: 3 });

      await processor.handleFailure(job, error);

      expect(materialService.updateParseError).not.toHaveBeenCalled();
    });

    it('should handle error when findOne fails in handleFailure', async () => {
      mockMaterialService.findOne.mockRejectedValue(
        new Error('Material not found'),
      );

      const error = new Error('Job failed');
      const job = createMockJob({ materialId: mockMaterialId, attempts: 3 });

      // Should not throw
      await expect(processor.handleFailure(job, error)).resolves.not.toThrow();
    });
  });
});
