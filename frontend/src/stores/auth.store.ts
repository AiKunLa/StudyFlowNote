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
import { setAuthToken, clearAuthToken, getAuthToken } from '@/services/http';

/** 用户信息类型 */
export interface User {
  id: string;
  email: string;
  name?: string;
}

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
  initialize: () => void;
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

  /** 登录 - TODO: 对接后端登录接口 */
  login: async (email: string, _password: string) => {
    set({ isLoading: true });
    try {
      // TODO: 调用后端登录 API
      // const response = await authService.login(email, password);
      // setAuthToken(response.data.token);
      // setUser(response.data.user);

      // Mock 数据用于测试 UI
      const mockUser: User = { id: '1', email, name: '测试用户' };
      setAuthToken('mock-token');
      set({ user: mockUser, isAuthenticated: true });
    } finally {
      set({ isLoading: false });
    }
  },

  /** 注册 - TODO: 对接后端注册接口 */
  register: async (email: string, _password: string, name?: string) => {
    set({ isLoading: true });
    try {
      // TODO: 调用后端注册 API
      // const response = await authService.register(email, password, name);
      // setAuthToken(response.data.token);
      // setUser(response.data.user);

      // Mock 数据用于测试 UI
      const mockUser: User = { id: '1', email, name };
      setAuthToken('mock-token');
      set({ user: mockUser, isAuthenticated: true });
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
  initialize: () => {
    const token = getAuthToken();
    if (token) {
      // TODO: 验证 token 有效性，获取用户信息
      // const response = await authService.getCurrentUser();
      // setUser(response.data.user);

      // Mock: 假设有 token 就认为已登录
      set({ isAuthenticated: true });
    }
  },
}));
