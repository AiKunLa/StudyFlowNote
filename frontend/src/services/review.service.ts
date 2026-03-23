/**
 * 复习中心 API 服务
 *
 * 基于 OpenAPI 规范定义复习相关的 API 调用
 */

import { http } from './http';
import type { ApiResponse } from './api.types';

// ============================================================
// 类型定义
// ============================================================

/** 复习结果 */
export type ReviewResult = 'POOR' | 'FAIR' | 'GOOD' | 'EXCELLENT';

/** 复习记录 */
export interface ReviewRecord {
  id: string;
  taskId: string;
  reviewDate: string;
  result: ReviewResult;
  score: number | null;
  intervalDays: number | null;
  nextReviewDate: string | null;
  notes: string | null;
  createdAt: string;
}

/** 提交复习请求 */
export interface ReviewSubmitRequest {
  taskId: string;
  result: ReviewResult;
  score?: number;
  notes?: string;
}

// ============================================================
// API 服务
// ============================================================

export const reviewService = {
  /**
   * 获取待复习任务列表
   * GET /reviews
   */
  list: (params?: { projectId?: string; date?: string }) =>
    http.get<ApiResponse<ReviewRecord[]>>('/reviews', { params }),

  /**
   * 提交复习结果
   * POST /reviews/submit
   */
  submit: (data: ReviewSubmitRequest) =>
    http.post<ApiResponse<ReviewRecord>>('/reviews/submit', data),
};
