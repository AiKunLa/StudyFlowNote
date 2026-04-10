import { Process, Processor, OnGlobalQueueFailed } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { MaterialService } from '../material.service';
import { ContentExtractor } from './content-extractor';
import { MaterialStatus } from '@prisma/client';

@Processor('material')
export class MaterialProcessor {
  private readonly logger = new Logger(MaterialProcessor.name);

  constructor(
    private readonly materialService: MaterialService,
    private readonly contentExtractor: ContentExtractor,
  ) {}

  /**
   * Process material job - extracts text content from uploaded files
   */
  @Process('process-material')
  async processMaterial(job: Job<{ materialId: string }>): Promise<void> {
    const { materialId } = job.data;
    this.logger.log(`Processing material: ${materialId}`);

    try {
      // Get material from database
      const material = await this.materialService.findOne(materialId);

      // Check if sourcePath exists
      if (!material.sourcePath) {
        throw new Error('Source path is missing');
      }

      // Update status to PARSING
      await this.materialService.updateStatus(materialId, MaterialStatus.PARSING);

      // Validate mimeType before processing
      const mimeType = material.mimeType || 'application/octet-stream';
      if (!ContentExtractor.supportedMimeTypes.includes(mimeType)) {
        throw new Error(`Unsupported file type: ${mimeType}`);
      }

      // Extract content based on mime type
      const rawText = await this.contentExtractor.extract(
        material.sourcePath,
        mimeType,
      );

      // Update material with extracted text and set status to READY
      await this.materialService.updateRawText(materialId, rawText, MaterialStatus.READY);

      this.logger.log(`Material ${materialId} processed successfully`);
    } catch (error) {
      this.logger.error(
        `Failed to process material ${materialId}: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );

      // Ensure FAILED status is set immediately - this prevents race condition
      // where handleFailure might not update status if it's already FAILED
      await this.materialService.updateStatus(materialId, MaterialStatus.FAILED);

      // Re-throw to trigger BullMQ retry logic
      throw error;
    }
  }

  /**
   * Handle failed jobs globally
   */
  @OnGlobalQueueFailed()
  async handleFailure(job: Job<{ materialId: string }>, error: Error): Promise<void> {
    const materialId = job.data?.materialId;
    if (!materialId) {
      this.logger.error(`Job failed with no materialId: ${error.message}`);
      return;
    }

    this.logger.error(
      `Material ${materialId} failed after ${job.attemptsMade} attempts: ${error.message}`,
    );

    // The material status should already be updated to FAILED by processMaterial
    // This is a fallback to ensure FAILED status is set
    try {
      const material = await this.materialService.findOne(materialId);
      if (material.status !== MaterialStatus.FAILED) {
        await this.materialService.updateParseError(
          materialId,
          `Job failed after ${job.attemptsMade} attempts: ${error.message}`,
        );
      }
    } catch (findError) {
      this.logger.error(`Failed to update material status on failure: ${findError}`);
    }
  }
}
