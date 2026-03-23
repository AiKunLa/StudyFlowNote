/**
 * AppLayout 组件 - 应用主布局
 *
 * 作用：
 * - 作为所有页面的统一布局容器
 * - 包含侧边栏和主内容区域
 * - 使用 React Router 的 Outlet 实现子路由渲染
 *
 * 布局结构：
 * ```
 * <div>                      # flex 容器，全屏布局
 *   <Sidebar />              # 左侧固定侧边栏
 *   <main>                   # 主内容区域
 *     <Outlet />             # 子页面在这里渲染
 *   </main>
 * </div>
 * ```
 *
 * 特性：
 * - 主内容区域根据侧边栏状态调整左边距
 * - 内容区域可以滚动（overflow-auto）
 * - 使用容器类确保内容居中和适当间距
 */

import { Outlet } from 'react-router';
import { Sidebar } from './sidebar';
import { useUIStore } from '@/stores/ui.store';
import { cn } from '@/lib/utils';

/**
 * AppLayout 组件
 *
 * 使用 Outlet 渲染子路由页面
 * Sidebar 的折叠状态控制主内容的左边距
 */
export function AppLayout() {
  // 从 Zustand store 获取侧边栏折叠状态
  const { sidebarCollapsed } = useUIStore();

  return (
    <div className="flex h-screen overflow-hidden">
      {/* 侧边栏组件 */}
      <Sidebar />

      {/* 主内容区域 */}
      <main
        className={cn(
          // 占据剩余空间
          'flex-1 overflow-auto',
          // 过渡动画
          'transition-all duration-200',
          // 根据侧边栏状态调整左边距
          // 侧边栏展开时 ml-64，折叠时 ml-16
          sidebarCollapsed ? 'ml-16' : 'ml-64'
        )}
      >
        {/* 内容容器 - 居中显示，添加内边距 */}
        <div className="container mx-auto p-6">
          {/*
            Outlet 是 React Router 的组件
            它会在这个位置渲染当前路由匹配的子路由组件
            例如访问 /projects 时，这里会渲染 ProjectListPage
          */}
          <Outlet />
        </div>
      </main>
    </div>
  );
}
