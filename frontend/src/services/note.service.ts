/**
 * 笔记 API 服务
 *
 * 基于 OpenAPI 规范定义笔记相关的 API 调用
 */

import { http } from './http';
import type { ApiResponse } from './api.types';

// ============================================================
// 类型定义
// ============================================================

/** 笔记实体 */
export interface Note {
  id: string;
  taskId: string;
  content: string;
  isImportant: boolean;
  isConfusing: boolean;
  createdAt: string;
  updatedAt: string;
}

/** 创建笔记请求 */
export interface NoteCreateRequest {
  taskId: string;
  content: string;
  isImportant?: boolean;
  isConfusing?: boolean;
}

// ============================================================
// API 服务
// ============================================================

export const noteService = {
  /**
   * 保存笔记
   * POST /notes
   */
  create: (data: NoteCreateRequest) =>
    http.post<ApiResponse<Note>>('/notes', data),
};
