/**
 * 错误码枚举
 * 0: 成功
 * 1xxx: 客户端错误
 * 2xxx: 服务端错误
 */
export enum ErrorCode {
  // 成功
  SUCCESS = 0,

  // 客户端错误 1xxx
  BAD_REQUEST = 1000, // 请求参数错误
  UNAUTHORIZED = 1001, // 未授权
  FORBIDDEN = 1002, // 禁止访问
  NOT_FOUND = 1003, // 资源不存在
  VALIDATION_ERROR = 1004, // 验证错误

  // 服务端错误 2xxx
  INTERNAL_SERVER_ERROR = 2000, // 服务器内部错误
  DATABASE_ERROR = 2001, // 数据库错误
  EXTERNAL_SERVICE_ERROR = 2002, // 外部服务错误
}
