/**
 * HTTP 客户端配置
 *
 * 作用：
 * - 创建 Axios 实例
 * - 配置请求/响应拦截器
 * - 统一错误处理
 * - 认证 Token 管理
 *
 * 使用方式：
 * ```typescript
 * import { http } from '@/services/http';
 *
 * // GET 请求
 * const response = await http.get('/projects');
 *
 * // POST 请求
 * const response = await http.post('/projects', { name: '新项目' });
 * ```
 */

import axios, {
  type AxiosInstance,
  type AxiosError,
  type InternalAxiosRequestConfig,
  type AxiosResponse,
} from 'axios';

// ============================================================
// 配置常量
// ============================================================

/** API 基础路径 - 从环境变量读取，默认使用本地后端 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

/** 请求超时时间（毫秒） */
const REQUEST_TIMEOUT = 10000;

// ============================================================
// 错误码定义
// ============================================================

/** 错误码常量 */
export const ErrorCode = {
  SUCCESS: 0,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  NETWORK_ERROR: -1,
} as const;

export type ErrorCodeType = (typeof ErrorCode)[keyof typeof ErrorCode];

// ============================================================
// HTTP 错误类
// ============================================================

/**
 * HTTP 错误类
 *
 * 提供更友好的错误信息，便于错误处理
 */
export class HttpError extends Error {
  code: number;
  apiMessage: string;
  status?: number;

  constructor(code: number, apiMessage: string, status?: number) {
    super(apiMessage);
    this.name = 'HttpError';
    this.code = code;
    this.apiMessage = apiMessage;
    this.status = status;
  }
}

// ============================================================
// Axios 实例创建
// ============================================================

/**
 * 创建配置好的 Axios 实例
 */
const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // ============================================================
  // 请求拦截器
  // ============================================================

  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      // 添加认证 Token
      const token = localStorage.getItem('auth_token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      // 添加请求时间戳（用于缓存控制）
      config.params = {
        ...config.params,
        _t: Date.now(),
      };

      return config;
    },
    (_error: AxiosError) => {
      return Promise.reject(new HttpError(ErrorCode.BAD_REQUEST, '请求配置错误'));
    }
  );

  // ============================================================
  // 响应拦截器
  // ============================================================

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      // 直接返回 data 部分
      const { data } = response;

      // 检查业务状态码
      if (data.code !== ErrorCode.SUCCESS) {
        const error = new HttpError(data.code, data.message || '请求失败');
        return Promise.reject(error);
      }

      return response;
    },
    (error: AxiosError) => {
      // 处理不同类型的错误
      if (error.response) {
        // 服务器返回了错误状态码
        const status = error.response.status;

        switch (status) {
          case ErrorCode.UNAUTHORIZED:
            // 未授权 - 清除 token 并跳转登录页
            localStorage.removeItem('auth_token');
            window.location.href = '/login';
            return Promise.reject(
              new HttpError(ErrorCode.UNAUTHORIZED, '登录已过期，请重新登录', status)
            );

          case ErrorCode.FORBIDDEN:
            return Promise.reject(
              new HttpError(ErrorCode.FORBIDDEN, '没有权限访问该资源', status)
            );

          case ErrorCode.NOT_FOUND:
            return Promise.reject(
              new HttpError(ErrorCode.NOT_FOUND, '请求的资源不存在', status)
            );

          case ErrorCode.INTERNAL_SERVER_ERROR:
            return Promise.reject(
              new HttpError(ErrorCode.INTERNAL_SERVER_ERROR, '服务器内部错误', status)
            );

          default:
            // 尝试从响应体获取错误信息
            const responseData = error.response.data as { message?: string };
            return Promise.reject(
              new HttpError(
                status,
                responseData?.message || `请求失败 (${status})`,
                status
              )
            );
        }
      } else if (error.request) {
        // 请求已发送但没有收到响应（通常是网络问题）
        return Promise.reject(
          new HttpError(ErrorCode.NETWORK_ERROR, '网络错误，请检查网络连接')
        );
      } else {
        // 请求配置出错
        return Promise.reject(new HttpError(ErrorCode.BAD_REQUEST, error.message || '请求失败'));
      }
    }
  );

  return instance;
};

// ============================================================
// 导出 HTTP 实例
// ============================================================

/**
 * HTTP 客户端单例
 *
 * 使用 axios 实例，预配置了：
 * - 基础路径
 * - 请求超时
 * - 请求/响应拦截器
 * - 错误处理
 */
export const http = createAxiosInstance();

// ============================================================
// 便捷方法
// ============================================================

/**
 * 设置认证 Token
 */
export const setAuthToken = (token: string): void => {
  localStorage.setItem('auth_token', token);
};

/**
 * 清除认证 Token
 */
export const clearAuthToken = (): void => {
  localStorage.removeItem('auth_token');
};

/**
 * 获取认证 Token
 */
export const getAuthToken = (): string | null => {
  return localStorage.getItem('auth_token');
};
