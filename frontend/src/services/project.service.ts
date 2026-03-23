/**
 * 项目管理 API 服务
 *
 * 基于 OpenAPI 规范定义项目相关的 API 调用
 */

import { http } from './http';
import type { ApiResponse } from './api.types';

// ============================================================
// 类型定义
// ============================================================

/** 项目基础信息 */
export interface Project {
  id: string;
  userId: string;
  name: string;
  description: string | null;
  goal: string | null;
  examDate: string | null;
  dailyTimeBudget: number | null;
  mode: string | null;
  createdAt: string;
  updatedAt: string;
}

/** 项目详情（包含进度和统计） */
export interface ProjectDetail extends Project {
  progress: Record<string, unknown> | null;
  taskStats: Record<string, unknown> | null;
}

/** 创建项目请求 */
export interface ProjectCreateRequest {
  name: string;
  goal?: string;
  examDate?: string;
  dailyTimeBudget?: number;
  mode?: string;
}

/** 更新项目请求 */
export interface ProjectUpdateRequest {
  name?: string;
  goal?: string;
  examDate?: string;
  dailyTimeBudget?: number;
  mode?: string;
}

/** 项目列表响应（分页） */
export interface ProjectListResponse {
  items: Project[];
  total: number;
  page: number;
  pageSize: number;
}

// ============================================================
// API 服务
// ============================================================

export const projectService = {
  /**
   * 获取项目列表（分页）
   * GET /projects
   */
  list: (params?: { page?: number; pageSize?: number }) =>
    http.get<ApiResponse<ProjectListResponse>>('/projects', { params }),

  /**
   * 创建项目
   * POST /projects
   */
  create: (data: ProjectCreateRequest) =>
    http.post<ApiResponse<Project>>('/projects', data),

  /**
   * 获取项目详情
   * GET /projects/{projectId}
   */
  getById: (projectId: string) =>
    http.get<ApiResponse<ProjectDetail>>(`/projects/${projectId}`),

  /**
   * 更新项目
   * PUT /projects/{projectId}
   */
  update: (projectId: string, data: ProjectUpdateRequest) =>
    http.put<ApiResponse<Project>>(`/projects/${projectId}`, data),

  /**
   * 删除项目
   * DELETE /projects/{projectId}
   */
  delete: (projectId: string) =>
    http.delete<ApiResponse<void>>(`/projects/${projectId}`),
};
