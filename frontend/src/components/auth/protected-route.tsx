/**
 * ProtectedRoute - 受保护的路由组件
 *
 * 作用：
 * - 检查用户是否已认证
 * - 未认证用户重定向到登录页
 * - 已认证用户渲染受保护的子路由
 *
 * 使用方式：
 * ```tsx
 * <ProtectedRoute>
 *   <DashboardPage />
 * </ProtectedRoute>
 * ```
 */

import { Navigate, useLocation } from 'react-router';
import { useAuthStore } from '@/stores/auth.store';

interface ProtectedRouteProps {
  /** 受保护的子路由 */
  children: React.ReactNode;
}

/**
 * 受保护的路由组件
 *
 * 检查用户是否已认证：
 * - 已认证：渲染子路由
 * - 未认证：重定向到登录页，并保存原始路径以便登录后跳转
 */
export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuthStore();
  const location = useLocation();

  if (!isAuthenticated) {
    // 保存原本想要访问的路径，登录后可以跳转回来
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
