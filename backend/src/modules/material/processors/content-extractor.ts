import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs/promises';

@Injectable()
export class ContentExtractor {
  private readonly logger = new Logger(ContentExtractor.name);

  // Supported MIME types
  static readonly supportedMimeTypes = [
    'application/pdf',
    'text/plain',
    'text/markdown',
    'text/x-markdown',
    // DOCX types
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];

  /**
   * Extract text content from a file based on its MIME type
   * @param filePath Path to the file
   * @param mimeType MIME type of the file
   * @returns Extracted text content
   */
  async extract(filePath: string, mimeType: string): Promise<string> {
    this.logger.debug(`Extracting content from ${filePath} (${mimeType})`);

    // Validate file exists
    try {
      await fs.access(filePath);
    } catch {
      throw new Error(`File not found: ${filePath}`);
    }

    switch (mimeType) {
      case 'application/pdf':
        return this.extractPdf(filePath);

      case 'text/plain':
      case 'text/markdown':
      case 'text/x-markdown':
        return this.extractText(filePath);

      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        return this.extractDocx(filePath);

      default:
        throw new Error(`Unsupported file type: ${mimeType}`);
    }
  }

  /**
   * Extract text from PDF files using pdf-parse
   */
  private async extractPdf(filePath: string): Promise<string> {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const pdfParse = require('pdf-parse');
    const buffer = await fs.readFile(filePath);
    const data = await pdfParse(buffer);
    return data.text || '';
  }

  /**
   * Extract text from plain text or markdown files
   */
  private async extractText(filePath: string): Promise<string> {
    const content = await fs.readFile(filePath, 'utf-8');
    return content;
  }

  /**
   * Extract text from DOCX files using mammoth
   */
  private async extractDocx(filePath: string): Promise<string> {
    let mammothModule;
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      mammothModule = require('mammoth');
    } catch (error) {
      throw new Error(
        'mammoth is not installed. Please run: pnpm add mammoth',
      );
    }

    const result = await mammothModule.extractRawText({ path: filePath });
    return result.value || '';
  }
}
