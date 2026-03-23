/**
 * 测验 API 服务
 *
 * 基于 OpenAPI 规范定义测验相关的 API 调用
 */

import { http } from './http';
import type { ApiResponse } from './api.types';

// ============================================================
// 类型定义
// ============================================================

/** 测验状态 */
export type QuizStatus = 'GENERATED' | 'SUBMITTED' | 'GRADED';

/** 测验实体 */
export interface Quiz {
  id: string;
  taskId: string;
  title: string | null;
  status: QuizStatus;
  score: number | null;
  feedback: Record<string, unknown> | null;
  generatedAt: string;
  submittedAt: string | null;
  gradedAt: string | null;
}

/** 测验问题 */
export interface QuizQuestion {
  index: number;
  questionType: string;
  questionText: string;
  referenceAnswer: string | null;
}

/** 测验答案输入 */
export interface QuizAnswerInput {
  questionIndex: number;
  userAnswer: string;
}

/** 生成测验请求 */
export interface QuizGenerateRequest {
  taskId: string;
}

/** 提交测验请求 */
export interface QuizSubmitRequest {
  answers: QuizAnswerInput[];
}

/** 测验答案 */
export interface QuizAnswer {
  id: string;
  quizId: string;
  questionIndex: number;
  questionType: string;
  questionText: string;
  referenceAnswer: string | null;
  userAnswer: string | null;
  isCorrect: boolean | null;
  score: number | null;
  analysis: string | null;
  errorType: string | null;
  createdAt: string;
}

/** 测验响应 */
export interface QuizResponse {
  quiz: Quiz;
  questions: QuizQuestion[];
}

/** 测验结果响应 */
export interface QuizResultResponse {
  quiz: Quiz;
  answers: QuizAnswer[];
  summary: Record<string, unknown>;
}

// ============================================================
// API 服务
// ============================================================

export const quizService = {
  /**
   * 生成测验
   * POST /quizzes/generate
   */
  generate: (data: QuizGenerateRequest) =>
    http.post<ApiResponse<QuizResponse>>('/quizzes/generate', data),

  /**
   * 获取测验结果
   * GET /quizzes/{quizId}/result
   */
  getResult: (quizId: string) =>
    http.get<ApiResponse<QuizResultResponse>>(`/quizzes/${quizId}/result`),

  /**
   * 提交测验答案
   * POST /quizzes/{quizId}/submit
   */
  submit: (quizId: string, data: QuizSubmitRequest) =>
    http.post<ApiResponse<QuizResultResponse>>(`/quizzes/${quizId}/submit`, data),
};
