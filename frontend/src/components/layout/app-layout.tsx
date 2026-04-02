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
 *     <Suspense>            # 懒加载 Suspense 边界
 *       <Outlet />           # 子页面在这里渲染
 *     </Suspense>
 *   </main>
 * </div>
 * ```
 *
 * 特性：
 * - 主内容区域根据侧边栏状态调整左边距
 * - 内容区域可以滚动（overflow-auto）
 * - 使用容器类确保内容居中和适当间距
 * - Suspense 处理懒加载页面的加载状态
 */

import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Sidebar } from './sidebar';
import { useUIStore } from '@/stores/ui.store';
import { cn } from '@/lib/utils';
import { LoadingSpinner } from '@/components/common/loading-spinner';

/**
 * AppLayout 组件
 *
 * 使用 Outlet 渲染子路由页面
 * Sidebar 的折叠状态控制主内容的左边距
 */
export function AppLayout() {
  // 从 Zustand store 获取侧边栏折叠状态
  useUIStore();

  return (
    <div className="flex h-screen overflow-hidden">
      {/* 侧边栏组件 */}
      <Sidebar />

      {/* 主内容区域 */}
      <main
        className={cn(
          // 占据剩余空间
          'flex-1 flex overflow-hidden',
          // 过渡动画
          'transition-all duration-200'
        )}
      >
        {/* 内容容器 - 居中显示，添加内边距 */}
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden p-2 lg:p-4">
          {/*
            Suspense 边界处理懒加载页面的加载状态
            当用户访问新路由时，对应的懒加载组件会显示 fallback UI
          */}
          <Suspense fallback={<LoadingSpinner className="h-full" />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
