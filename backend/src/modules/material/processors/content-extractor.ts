import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';

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

  // MIME type to extension mapping for fallback detection
  private static readonly mimeTypeFromExtension: Record<string, string> = {
    '.pdf': 'application/pdf',
    '.txt': 'text/plain',
    '.text': 'text/plain',
    '.md': 'text/markdown',
    '.markdown': 'text/markdown',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  };

  /**
   * Detect MIME type from file extension when the provided mimeType is unknown
   * @param filePath Path to the file
   * @param mimeType Original MIME type (may be application/octet-stream)
   * @returns Resolved MIME type
   */
  private resolveMimeType(filePath: string, mimeType: string): string {
    // If mimeType is already recognized, use it
    if (ContentExtractor.supportedMimeTypes.includes(mimeType)) {
      return mimeType;
    }

    // Try to detect from file extension
    const ext = path.extname(filePath).toLowerCase();
    const resolvedMime = ContentExtractor.mimeTypeFromExtension[ext];
    if (resolvedMime && ContentExtractor.supportedMimeTypes.includes(resolvedMime)) {
      this.logger.debug(`Detected mime type ${resolvedMime} from extension ${ext}`);
      return resolvedMime;
    }

    // Fallback to original mimeType if no match found
    return mimeType;
  }

  /**
   * Extract text content from a file based on its MIME type
   * @param filePath Path to the file
   * @param mimeType MIME type of the file
   * @returns Extracted text content
   */
  async extract(filePath: string, mimeType: string): Promise<string> {
    // Resolve mime type from extension if the provided one is unknown
    const resolvedMimeType = this.resolveMimeType(filePath, mimeType);
    this.logger.debug(`Extracting content from ${filePath} (${resolvedMimeType})`);

    // Validate file exists
    try {
      await fs.access(filePath);
    } catch {
      throw new Error(`File not found: ${filePath}`);
    }

    switch (resolvedMimeType) {
      case 'application/pdf':
        return this.extractPdf(filePath);

      case 'text/plain':
      case 'text/markdown':
      case 'text/x-markdown':
        return this.extractText(filePath);

      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        return this.extractDocx(filePath);

      default:
        throw new Error(`Unsupported file type: ${resolvedMimeType}`);
    }
  }

  /**
   * Extract text from PDF files using pdf-parse
   */
  private async extractPdf(filePath: string): Promise<string> {
    const { PDFParse } = await import('pdf-parse');
    const buffer = await fs.readFile(filePath);
    const parser = new PDFParse({ data: buffer });
    const result = await parser.getText();
    return result.text || '';
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
