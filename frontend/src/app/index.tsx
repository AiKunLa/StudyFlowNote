/**
 * App 根组件
 *
 * 作用：
 * - 组合所有全局 Provider 组件
 * - 作为应用的顶层组件
 *
 * Provider 层级顺序（从内到外）：
 * 1. RouterProvider - 路由管理
 * 2. QueryProvider - TanStack Query 状态管理
 * 3. AppProvider - 全局应用状态（当前为透传）
 *
 * 组件组合结构：
 * ```
 * <App>
 *   <AppProvider>
 *     <QueryProvider>
 *       <RouterProvider>
 *         {null}  // 路由内容由 router 配置决定
 *       </RouterProvider>
 *     </QueryProvider>
 *   </AppProvider>
 * </App>
 * ```
 */

import { RouterProvider } from 'react-router';
import { router } from '@/router';
import { QueryProvider } from './providers/query-provider';
import { AppProvider } from './providers/app-provider';

/**
 * App 根组件
 *
 * 使用方式：
 * ```tsx
 * // main.tsx
 * import { App } from './app';
 * <App />
 * ```
 */
export function App() {
  return (
    <AppProvider>
      <QueryProvider>
        {/* RouterProvider 接收 router 实例并渲染路由内容 */}
        <RouterProvider router={router} />
      </QueryProvider>
    </AppProvider>
  );
}
