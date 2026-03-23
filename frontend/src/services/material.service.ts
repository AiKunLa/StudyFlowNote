/**
 * 资料中心 API 服务
 *
 * 基于 OpenAPI 规范定义资料相关的 API 调用
 */

import { http } from './http';
import type { ApiResponse, PaginatedResponse } from './api.types';

// ============================================================
// 类型定义
// ============================================================

/** 资料类型 */
export type MaterialType = 'PDF' | 'MARKDOWN' | 'TEXT';

/** 资料状态 */
export type MaterialStatus = 'UPLOADING' | 'PARSING' | 'READY' | 'FAILED';

/** 资料实体 */
export interface Material {
  id: string;
  projectId: string;
  title: string;
  type: MaterialType;
  sourcePath: string | null;
  rawText: string | null;
  status: MaterialStatus;
  parseError: string | null;
  metadata: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
}

/** 上传资料请求 */
export interface MaterialUploadRequest {
  projectId: string;
  title: string;
  type: MaterialType;
  file?: File;
  rawText?: string;
}

/** 资料解析状态响应 */
export interface MaterialStatusResponse {
  status: MaterialStatus;
  parseError: string | null;
}

/** 资料片段 */
export interface MaterialChunk {
  id: string;
  materialId: string;
  chunkIndex: number;
  title: string | null;
  content: string;
  summary: string | null;
  sourcePage: number | null;
  sourceSection: string | null;
  metadata: Record<string, unknown> | null;
}

/** 知识点 */
export interface KnowledgeUnit {
  id: string;
  materialId: string;
  title: string;
  summary: string | null;
  topic: string | null;
  difficulty: number | null;
  importance: number | null;
  estimatedMinutes: number | null;
  prerequisiteIds: string[];
  sourceRefs: Record<string, unknown> | null;
}

/** 资料结构 */
export interface MaterialStructure {
  chunks: MaterialChunk[];
  knowledgeUnits: KnowledgeUnit[];
}

// ============================================================
// API 服务
// ============================================================

export const materialService = {
  /**
   * 上传资料
   * POST /materials
   */
  upload: (data: MaterialUploadRequest) => {
    // 使用 FormData 处理文件上传
    const formData = new FormData();
    formData.append('projectId', data.projectId);
    formData.append('title', data.title);
    formData.append('type', data.type);
    if (data.file) {
      formData.append('file', data.file);
    }
    if (data.rawText) {
      formData.append('rawText', data.rawText);
    }
    return http.post<ApiResponse<Material>>('/materials', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },

  /**
   * 获取资料列表
   * GET /materials
   */
  list: (params?: { projectId?: string; status?: MaterialStatus; page?: number; pageSize?: number }) =>
    http.get<ApiResponse<PaginatedResponse<Material>>>('/materials', { params }),

  /**
   * 删除资料
   * DELETE /materials/{materialId}
   */
  delete: (materialId: string) =>
    http.delete<ApiResponse<void>>(`/materials/${materialId}`),

  /**
   * 获取资料解析状态
   * GET /materials/{materialId}/status
   */
  getStatus: (materialId: string) =>
    http.get<ApiResponse<MaterialStatusResponse>>(`/materials/${materialId}/status`),

  /**
   * 获取资料结构预览
   * GET /materials/{materialId}/structure
   */
  getStructure: (materialId: string) =>
    http.get<ApiResponse<MaterialStructure>>(`/materials/${materialId}/structure`),

  /**
   * 绑定资料到项目
   * POST /materials/{materialId}/assign
   */
  assign: (materialId: string, projectId: string) =>
    http.post<ApiResponse<Material>>(`/materials/${materialId}/assign`, { projectId }),
};
