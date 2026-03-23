/**
 * Auth Store - 用户认证状态管理
 *
 * 作用：
 * - 管理用户登录状态
 * - 存储用户信息
 * - 处理登录/登出逻辑
 *
 * 使用方式：
 * ```typescript
 * const { user, isAuthenticated, login, logout } = useAuthStore();
 * ```
 */

import { create } from 'zustand';
import { setAuthToken, clearAuthToken, getAuthToken, HttpError } from '@/services/http';
import { authService, type User } from '@/services/auth.service';

/** Auth Store 状态类型 */
interface AuthState {
  /** 当前用户信息 */
  user: User | null;
  /** 是否已认证 */
  isAuthenticated: boolean;
  /** 加载状态 */
  isLoading: boolean;
}

/** Auth Store Actions 类型 */
interface AuthActions {
  /** 设置用户 */
  setUser: (user: User | null) => void;
  /** 登录 */
  login: (email: string, password: string) => Promise<void>;
  /** 注册 */
  register: (email: string, password: string, name?: string) => Promise<void>;
  /** 登出 */
  logout: () => void;
  /** 初始化 - 从 localStorage 恢复会话 */
  initialize: () => Promise<void>;
}

/** Auth Store 类型 */
type AuthStore = AuthState & AuthActions;

/**
 * Auth Store
 *
 * 使用 Zustand 管理用户认证状态
 */
export const useAuthStore = create<AuthStore>((set) => ({
  // 初始状态
  user: null,
  isAuthenticated: false,
  isLoading: false,

  /** 设置用户信息 */
  setUser: (user) =>
    set({
      user,
      isAuthenticated: !!user,
    }),

  /** 登录 */
  login: async (email: string, password: string) => {
    set({ isLoading: true });
    try {
      const response = await authService.login({ email, password });
      const { accessToken, user } = response.data.data;

      // 保存 token 到 localStorage
      setAuthToken(accessToken);

      // 设置用户信息
      set({ user, isAuthenticated: true });
    } catch (error) {
      if (error instanceof HttpError) {
        throw new Error(error.apiMessage || '登录失败');
      }
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  /** 注册 */
  register: async (email: string, password: string, name?: string) => {
    set({ isLoading: true });
    try {
      // 注册成功后自动登录
      const response = await authService.register({ email, password, name });
      const userData = response.data.data;

      // 注册后使用 email 作为密码进行登录，获取 token
      const loginResponse = await authService.login({ email, password });
      const { accessToken } = loginResponse.data.data;

      // 保存 token 到 localStorage
      setAuthToken(accessToken);

      // 设置用户信息
      set({ user: userData, isAuthenticated: true });
    } catch (error) {
      if (error instanceof HttpError) {
        throw new Error(error.apiMessage || '注册失败');
      }
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  /** 登出 */
  logout: () => {
    clearAuthToken();
    set({ user: null, isAuthenticated: false });
  },

  /** 初始化 - 从 localStorage 恢复会话 */
  initialize: async () => {
    const token = getAuthToken();
    if (!token) {
      return;
    }

    set({ isLoading: true });
    try {
      // 验证 token 有效性，获取用户信息
      const response = await authService.getCurrentUser();
      set({ user: response.data.data, isAuthenticated: true });
    } catch (error) {
      // token 无效或已过期，清除并保持未登录状态
      clearAuthToken();
      set({ user: null, isAuthenticated: false });
    } finally {
      set({ isLoading: false });
    }
  },
}));
