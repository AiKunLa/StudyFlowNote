/**
 * 学习计划 API 服务
 *
 * 基于 OpenAPI 规范定义学习计划相关的 API 调用
 */

import { http } from './http';
import type { ApiResponse } from './api.types';
import type { Task } from './task.service';

// ============================================================
// 类型定义
// ============================================================

/** 计划状态 */
export type PlanStatus = 'DRAFT' | 'ACTIVE' | 'COMPLETED' | 'ARCHIVED';

/** 学习计划 */
export interface StudyPlan {
  id: string;
  projectId: string;
  title: string;
  startDate: string;
  endDate: string;
  totalDays: number;
  status: PlanStatus;
  config: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
}

/** 计划详情（包含任务） */
export interface PlanDetail extends StudyPlan {
  tasks: Task[];
}

/** 生成学习计划请求 */
export interface PlanGenerateRequest {
  projectId: string;
  startDate?: string;
  endDate?: string;
  totalDays?: number;
  dailyTimeBudget?: number;
  mode?: string;
}

// ============================================================
// API 服务
// ============================================================

export const planService = {
  /**
   * 生成学习计划
   * POST /plans/generate
   */
  generate: (data: PlanGenerateRequest) =>
    http.post<ApiResponse<StudyPlan>>('/plans/generate', data),

  /**
   * 获取学习计划详情
   * GET /plans/{planId}
   */
  getById: (planId: string) =>
    http.get<ApiResponse<PlanDetail>>(`/plans/${planId}`),
};
