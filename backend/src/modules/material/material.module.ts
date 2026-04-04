import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { MaterialController } from './material.controller';
import { MaterialService } from './material.service';
import { MaterialProcessor } from './processors/material.processor';
import { ContentExtractor } from './processors/content-extractor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'material',
    }),
  ],
  controllers: [MaterialController],
  providers: [MaterialService, MaterialProcessor, ContentExtractor],
  exports: [MaterialService],
})
export class MaterialModule {}
