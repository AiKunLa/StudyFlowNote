import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import { Prisma } from '@prisma/client';
import { ErrorCode } from '../enums/error-code.enum';
import { ResponseDto } from '../dto/response.dto';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let code = ErrorCode.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';

    // 打印错误日志
    this.logError(exception, request, status);

    // 处理 HttpException
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();

      if (typeof exceptionResponse === 'string') {
        message = exceptionResponse;
      } else if (typeof exceptionResponse === 'object') {
        const resp = exceptionResponse as Record<string, unknown>;
        message = (resp.message as string) || exception.message;

        // 处理验证错误
        if (status === HttpStatus.BAD_REQUEST && Array.isArray(resp.message)) {
          code = ErrorCode.VALIDATION_ERROR;
          message = Array.isArray(resp.message)
            ? resp.message.join(', ')
            : String(resp.message);
        }
      }

      // 根据 HTTP 状态码映射错误码
      code = this.mapHttpStatusToErrorCode(status);
    }
    // 处理 Prisma 异常
    else if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      code = ErrorCode.DATABASE_ERROR;
      message = this.handlePrismaError(exception);
      status = HttpStatus.BAD_REQUEST;
    }
    // 处理其他异常
    else if (exception instanceof Error) {
      message = exception.message;
    }

    const responseBody = ResponseDto.error(code, message);

    response.status(status).json(responseBody);
  }

  /**
   * 打印错误日志
   */
  private logError(exception: unknown, request: Record<string, unknown>, status: number): void {
    const requestInfo = `${request.method} ${request.url}`;
    const errorType = exception?.constructor?.name || 'Unknown';

    if (exception instanceof HttpException) {
      this.logger.warn(`[${status}] ${requestInfo} - ${errorType}: ${exception.message}`);
    } else if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      this.logger.error(`Database Error - ${requestInfo} - ${errorType}: ${exception.message}`, exception.stack);
    } else if (exception instanceof Error) {
      this.logger.error(`Server Error - ${requestInfo} - ${errorType}: ${exception.message}`, exception.stack);
    } else {
      this.logger.error(`Unknown Error - ${requestInfo}`, '');
    }
  }

  /**
   * 将 HTTP 状态码映射到错误码
   */
  private mapHttpStatusToErrorCode(status: number): number {
    const statusToCodeMap: Record<number, ErrorCode> = {
      [HttpStatus.BAD_REQUEST]: ErrorCode.BAD_REQUEST,
      [HttpStatus.UNAUTHORIZED]: ErrorCode.UNAUTHORIZED,
      [HttpStatus.FORBIDDEN]: ErrorCode.FORBIDDEN,
      [HttpStatus.NOT_FOUND]: ErrorCode.NOT_FOUND,
    };

    return statusToCodeMap[status] || ErrorCode.INTERNAL_SERVER_ERROR;
  }

  /**
   * 处理 Prisma 错误
   */
  private handlePrismaError(exception: Prisma.PrismaClientKnownRequestError): string {
    switch (exception.code) {
      case 'P2002':
        return '记录已存在';
      case 'P2003':
        return '关联的记录不存在';
      case 'P2025':
        return '记录不存在';
      default:
        return `数据库错误: ${exception.message}`;
    }
  }
}
