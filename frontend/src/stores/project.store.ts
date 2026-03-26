/**
 * Project Store - 项目状态管理
 *
 * 作用：
 * - 管理项目列表数据
 * - 管理当前选中项目
 * - 处理项目 CRUD 操作
 * - 统一状态管理，避免 prop drilling
 *
 * 使用方式：
 * ```typescript
 * const { projects, currentProject, isLoading, fetchProjects, createProject, deleteProject } = useProjectStore();
 * ```
 */

import { create } from 'zustand';
import { projectService, type Project, type ProjectCreateRequest, type ProjectUpdateRequest } from '@/services/project.service';
import { HttpError } from '@/services/http';

/** Project Store 状态类型 */
interface ProjectState {
  /** 项目列表 */
  projects: Project[];
  /** 当前选中的项目 */
  currentProject: Project | null;
  /** 加载状态 */
  isLoading: boolean;
  /** 错误信息 */
  error: string | null;
}

/** Project Store Actions 类型 */
interface ProjectActions {
  /** 获取项目列表 */
  fetchProjects: () => Promise<void>;
  /** 获取单个项目详情 */
  fetchProject: (projectId: string) => Promise<void>;
  /** 创建项目 */
  createProject: (data: ProjectCreateRequest) => Promise<Project>;
  /** 更新项目 */
  updateProject: (projectId: string, data: ProjectUpdateRequest) => Promise<void>;
  /** 删除项目 */
  deleteProject: (projectId: string) => Promise<void>;
  /** 清空错误 */
  clearError: () => void;
  /** 清空当前项目 */
  clearCurrentProject: () => void;
}

/** Project Store 类型 */
type ProjectStore = ProjectState & ProjectActions;

/**
 * Project Store
 *
 * 使用 Zustand 管理项目相关状态
 */
export const useProjectStore = create<ProjectStore>((set) => ({
  // 初始状态
  projects: [],
  currentProject: null,
  isLoading: false,
  error: null,

  /** 获取项目列表 */
  fetchProjects: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await projectService.list();
      set({ projects: response.data.data.items });
    } catch (err) {
      if (err instanceof HttpError) {
        set({ error: err.apiMessage || '获取项目列表失败' });
      } else {
        set({ error: '获取项目列表失败' });
      }
    } finally {
      set({ isLoading: false });
    }
  },

  /** 获取单个项目详情 */
  fetchProject: async (projectId: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await projectService.getById(projectId);
      set({ currentProject: response.data.data });
    } catch (err) {
      if (err instanceof HttpError) {
        set({ error: err.apiMessage || '获取项目详情失败' });
      } else {
        set({ error: '获取项目详情失败' });
      }
    } finally {
      set({ isLoading: false });
    }
  },

  /** 创建项目 */
  createProject: async (data: ProjectCreateRequest) => {
    set({ isLoading: true, error: null });
    try {
      const response = await projectService.create(data);
      const newProject = response.data.data;
      // 将新项目添加到列表头部
      set((state) => ({
        projects: [newProject, ...state.projects],
      }));
      return newProject;
    } catch (err) {
      if (err instanceof HttpError) {
        set({ error: err.apiMessage || '创建项目失败' });
      } else {
        set({ error: '创建项目失败' });
      }
      throw err;
    } finally {
      set({ isLoading: false });
    }
  },

  /** 更新项目 */
  updateProject: async (projectId: string, data: ProjectUpdateRequest) => {
    set({ isLoading: true, error: null });
    try {
      const response = await projectService.update(projectId, data);
      const updatedProject = response.data.data;
      // 更新列表中的项目
      set((state) => ({
        projects: state.projects.map((p) => (p.id === projectId ? updatedProject : p)),
        currentProject: state.currentProject?.id === projectId ? updatedProject : state.currentProject,
      }));
    } catch (err) {
      if (err instanceof HttpError) {
        set({ error: err.apiMessage || '更新项目失败' });
      } else {
        set({ error: '更新项目失败' });
      }
      throw err;
    } finally {
      set({ isLoading: false });
    }
  },

  /** 删除项目 */
  deleteProject: async (projectId: string) => {
    set({ isLoading: true, error: null });
    try {
      await projectService.delete(projectId);
      // 从列表中移除
      set((state) => ({
        projects: state.projects.filter((p) => p.id !== projectId),
        currentProject: state.currentProject?.id === projectId ? null : state.currentProject,
      }));
    } catch (err) {
      if (err instanceof HttpError) {
        set({ error: err.apiMessage || '删除项目失败' });
      } else {
        set({ error: '删除项目失败' });
      }
      throw err;
    } finally {
      set({ isLoading: false });
    }
  },

  /** 清空错误 */
  clearError: () => set({ error: null }),

  /** 清空当前项目 */
  clearCurrentProject: () => set({ currentProject: null }),
}));
