/**
 * 认证服务
 *
 * 基于后端 /auth 接口封装认证相关的 API 调用
 */

import { http } from './http';
import type { ApiResponse } from './api.types';

// ============================================================
// 类型定义
// ============================================================

/** 登录请求 */
export interface LoginRequest {
  email: string;
  password: string;
}

/** 注册请求 */
export interface RegisterRequest {
  email: string;
  password: string;
  name?: string;
}

/** 登录响应 */
export interface AuthResponse {
  accessToken: string;
  user: {
    id: string;
    email: string;
    name?: string;
  };
}

/** 用户信息 */
export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt?: string;
}

// ============================================================
// API 服务
// ============================================================

export const authService = {
  /**
   * 用户登录
   * POST /auth/login
   */
  login: (data: LoginRequest) =>
    http.post<ApiResponse<AuthResponse>>('/auth/login', data),

  /**
   * 用户注册
   * POST /auth/register
   */
  register: (data: RegisterRequest) =>
    http.post<ApiResponse<User>>('/auth/register', data),

  /**
   * 获取当前用户信息
   * GET /auth/me
   */
  getCurrentUser: () =>
    http.get<ApiResponse<User>>('/auth/me'),
};
