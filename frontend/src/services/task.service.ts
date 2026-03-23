/**
 * 任务管理 API 服务
 *
 * 基于 OpenAPI 规范定义任务相关的 API 调用
 */

import { http } from './http';
import type { ApiResponse } from './api.types';

// ============================================================
// 类型定义
// ============================================================

/** 任务类型 */
export type TaskType = 'LEARN' | 'REVIEW' | 'REINFORCE' | 'QUIZ';

/** 任务状态 */
export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE' | 'SKIPPED' | 'OVERDUE';

/** 任务实体 */
export interface Task {
  id: string;
  studyPlanId: string;
  title: string;
  description: string | null;
  taskType: TaskType;
  status: TaskStatus;
  scheduledDate: string;
  estimatedMinutes: number | null;
  difficulty: number | null;
  priority: number | null;
  masteryScore: number | null;
  nextReviewDate: string | null;
  createdAt: string;
  updatedAt: string;
  completedAt: string | null;
}

/** 更新任务状态请求 */
export interface TaskStatusUpdateRequest {
  status: TaskStatus;
}

/** 任务内容块 */
export interface TaskContentBlock {
  title: string | null;
  content: string;
  sourcePage: number | null;
  sourceSection: string | null;
}

/** 任务内容响应 */
export interface TaskContentResponse {
  taskId: string;
  blocks: TaskContentBlock[];
}

// ============================================================
// API 服务
// ============================================================

export const taskService = {
  /**
   * 获取今日任务列表
   * GET /tasks/today
   */
  getTodayTasks: (params?: { projectId?: string; date?: string }) =>
    http.get<ApiResponse<Task[]>>('/tasks/today', { params }),

  /**
   * 获取任务详情
   * GET /tasks/{taskId}
   */
  getById: (taskId: string) =>
    http.get<ApiResponse<Task>>(`/tasks/${taskId}`),

  /**
   * 获取任务资料片段
   * GET /tasks/{taskId}/content
   */
  getContent: (taskId: string) =>
    http.get<ApiResponse<TaskContentResponse>>(`/tasks/${taskId}/content`),

  /**
   * 更新任务状态
   * POST /tasks/{taskId}/status
   */
  updateStatus: (taskId: string, data: TaskStatusUpdateRequest) =>
    http.post<ApiResponse<Task>>(`/tasks/${taskId}/status`, data),
};
