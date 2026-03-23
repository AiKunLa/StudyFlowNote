/**
 * UI Store - 全局 UI 状态管理
 *
 * 作用：
 * - 使用 Zustand 管理全局 UI 状态
 * - 当前主要管理侧边栏的折叠/展开状态
 *
 * 为什么用 Zustand：
 * - 轻量级状态管理库
 * - 相比 Redux 更少的模板代码
 * - 支持 React 外使用（如在组件外获取状态）
 *
 * 使用方式：
 * ```tsx
 * // 在组件中获取状态
 * const { sidebarCollapsed, toggleSidebar } = useUIStore();
 *
 * // 在组件外获取状态（较少使用）
 * const sidebarCollapsed = useUIStore.getState().sidebarCollapsed;
 * ```
 */

import { create } from 'zustand';

/** UI 状态接口定义 */
interface UIState {
  /** 侧边栏是否折叠 */
  sidebarCollapsed: boolean;

  /** 切换侧边栏折叠状态 */
  toggleSidebar: () => void;

  /** 设置侧边栏折叠状态 */
  setSidebarCollapsed: (collapsed: boolean) => void;
}

/**
 * UI Store 实例
 *
 * 使用函数式更新确保状态更新的原子性
 * toggleSidebar 使用 set(state => ...) 模式避免依赖当前状态
 */
export const useUIStore = create<UIState>((set) => ({
  // 初始状态：侧边栏展开
  sidebarCollapsed: false,

  // 切换折叠状态 - 通过函数式更新反转当前状态
  toggleSidebar: () =>
    set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),

  // 直接设置折叠状态 - 用于程序化控制
  setSidebarCollapsed: (collapsed) =>
    set({ sidebarCollapsed: collapsed }),
}));
