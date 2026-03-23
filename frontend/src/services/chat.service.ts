/**
 * AI 问答 API 服务
 *
 * 基于 OpenAPI 规范定义 AI 问答相关的 API 调用
 */

import { http } from './http';
import type { ApiResponse } from './api.types';

// ============================================================
// 类型定义
// ============================================================

/** 问答请求 */
export interface ChatAskRequest {
  taskId: string;
  question: string;
}

/** 问答响应 */
export interface ChatAskResponse {
  answer: string;
  sources?: string[];
}

// ============================================================
// API 服务
// ============================================================

export const chatService = {
  /**
   * 任务内问答
   * POST /chat/ask
   */
  ask: (data: ChatAskRequest) =>
    http.post<ApiResponse<ChatAskResponse>>('/chat/ask', data),
};
