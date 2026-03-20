import { ErrorCode } from '../enums/error-code.enum';

/**
 * 统一响应 DTO
 * @template T 数据类型
 */
export class ResponseDto<T = unknown> {
  /**
   * 错误码，0 表示成功
   */
  code: number;

  /**
   * 响应消息
   */
  message: string;

  /**
   * 响应数据
   */
  data: T;

  /**
   * 时间戳
   */
  timestamp: string;

  constructor(data: T, code: number = ErrorCode.SUCCESS, message: string = 'ok') {
    this.code = code;
    this.message = message;
    this.data = data;
    this.timestamp = new Date().toISOString();
  }

  /**
   * 创建成功响应
   */
  static success<T>(data: T, message: string = 'ok'): ResponseDto<T> {
    return new ResponseDto(data, ErrorCode.SUCCESS, message);
  }

  /**
   * 创建错误响应
   */
  static error(code: number, message: string): ResponseDto<null> {
    return new ResponseDto(null, code, message);
  }
}
