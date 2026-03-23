/**
 * API 通用类型定义
 *
 * 作用：
 * - 定义 API 响应格式
 * - 定义通用错误类型
 * - 提供请求配置选项
 */

/**
 * 统一 API 响应格式
 *
 * 后端所有接口都返回此格式：
 * - code: 状态码，0 表示成功
 * - message: 提示信息
 * - data: 响应数据
 */
export interface ApiResponse<T = unknown> {
  code: number;
  message: string;
  data: T;
}

/**
 * 分页响应格式
 */
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

/**
 * API 错误类型
 */
export interface ApiError {
  code: number;
  message: string;
  details?: string;
}

/**
 * 请求配置选项
 */
export interface RequestOptions {
  headers?: Record<string, string>;
  timeout?: number;
}

/**
 * 通用 CRUD 操作类型
 */
export interface CrudOperations<T, CreateDto, UpdateDto> {
  list: () => Promise<ApiResponse<T[]>>;
  getById: (id: string) => Promise<ApiResponse<T>>;
  create: (data: CreateDto) => Promise<ApiResponse<T>>;
  update: (id: string, data: UpdateDto) => Promise<ApiResponse<T>>;
  delete: (id: string) => Promise<ApiResponse<void>>;
}
