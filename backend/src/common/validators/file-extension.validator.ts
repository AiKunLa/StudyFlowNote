import { FileValidator } from '@nestjs/common';

export interface FileExtensionValidatorOptions {
  extensions: string[];
}

/**
 * 自定义文件扩展名验证器
 * 检查文件的扩展名而非 MIME 类型
 */
export class FileExtensionValidator extends FileValidator<FileExtensionValidatorOptions> {
  private readonly allowedExtensions: string[];

  constructor(options: FileExtensionValidatorOptions) {
    super(options);
    this.allowedExtensions = options.extensions.map((ext) =>
      ext.startsWith('.') ? ext.slice(1) : ext,
    );
  }

  isValid(file?: Express.Multer.File): boolean {
    if (!file || !file.originalname) {
      return false;
    }
    const extension = file.originalname.split('.').pop()?.toLowerCase();
    return extension ? this.allowedExtensions.includes(extension) : false;
  }

  buildErrorMessage(): string {
    return `Invalid file type. Allowed extensions: ${this.allowedExtensions.join(', ')}`;
  }
}
