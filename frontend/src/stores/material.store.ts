/**
 * Material Store - 素材状态管理
 *
 * 作用：
 * - 管理素材列表数据
 * - 管理当前选中素材
 * - 处理素材上传、删除等 CRUD 操作
 * - 统一状态管理，避免 prop drilling
 *
 * 使用方式：
 * ```typescript
 * const { materials, uploading, fetchMaterials, uploadMaterial, deleteMaterial } = useMaterialStore();
 * ```
 */

import { create } from 'zustand';
import { materialService, type Material, type MaterialUploadRequest } from '@/services/material.service';
import { HttpError } from '@/services/http';

export interface MaterialState {
  /** 素材列表 */
  materials: Material[];
  /** 当前选中的素材 */
  currentMaterial: Material | null;
  /** 是否正在上传 */
  uploading: boolean;
  /** 是否正在加载 */
  isLoading: boolean;
  /** 错误信息 */
  error: string | null;
}

export interface MaterialActions {
  /** 获取项目的素材列表 */
  fetchMaterials: (projectId: string) => Promise<void>;
  /** 上传素材 */
  uploadMaterial: (data: MaterialUploadRequest) => Promise<void>;
  /** 删除素材 */
  deleteMaterial: (materialId: string) => Promise<void>;
  /** 设置当前选中的素材 */
  setCurrentMaterial: (material: Material | null) => void;
  /** 清空错误 */
  clearError: () => void;
}

export type MaterialStore = MaterialState & MaterialActions;

/**
 * Material Store
 *
 * 使用 Zustand 管理素材相关状态
 */
export const useMaterialStore = create<MaterialStore>((set) => ({
  // 初始状态
  materials: [],
  currentMaterial: null,
  uploading: false,
  isLoading: false,
  error: null,

  /** 获取项目的素材列表 */
  fetchMaterials: async (projectId: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await materialService.list({ projectId });
      set({ materials: response.data.data.items });
    } catch (err) {
      if (err instanceof HttpError) {
        set({ error: err.apiMessage || '获取资料列表失败' });
      } else {
        set({ error: '获取资料列表失败' });
      }
    } finally {
      set({ isLoading: false });
    }
  },

  /** 上传素材 */
  uploadMaterial: async (data: MaterialUploadRequest) => {
    set({ uploading: true, error: null });
    try {
      const response = await materialService.upload(data);
      const newMaterial = response.data.data;
      // 将新素材添加到列表头部
      set((state) => ({
        materials: [newMaterial, ...state.materials],
      }));
    } catch (err) {
      if (err instanceof HttpError) {
        set({ error: err.apiMessage || '上传资料失败' });
      } else {
        set({ error: '上传资料失败' });
      }
      throw err;
    } finally {
      set({ uploading: false });
    }
  },

  /** 删除素材 */
  deleteMaterial: async (materialId: string) => {
    set({ isLoading: true, error: null });
    try {
      await materialService.delete(materialId);
      // 从列表中移除
      set((state) => ({
        materials: state.materials.filter((m) => m.id !== materialId),
        currentMaterial: state.currentMaterial?.id === materialId ? null : state.currentMaterial,
      }));
    } catch (err) {
      if (err instanceof HttpError) {
        set({ error: err.apiMessage || '删除资料失败' });
      } else {
        set({ error: '删除资料失败' });
      }
      throw err;
    } finally {
      set({ isLoading: false });
    }
  },

  /** 设置当前选中的素材 */
  setCurrentMaterial: (material: Material | null) => {
    set({ currentMaterial: material });
  },

  /** 清空错误 */
  clearError: () => set({ error: null }),
}));