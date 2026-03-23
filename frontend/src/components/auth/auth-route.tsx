/**
 * AuthRoute - 认证路由组件
 *
 * 作用：
 * - 已登录用户不能访问登录/注册页
 * - 已登录用户访问登录页时重定向到首页
 *
 * 使用方式：
 * ```tsx
 * <AuthRoute>
 *   <LoginPage />
 * </AuthRoute>
 * ```
 */

import { Navigate } from 'react-router';
import { useAuthStore } from '@/stores/auth.store';

interface AuthRouteProps {
  /** 认证页面的子路由（登录/注册页） */
  children: React.ReactNode;
}

/**
 * 认证路由组件（用于登录/注册页）
 *
 * 检查用户是否已认证：
 * - 已认证：重定向到首页
 * - 未认证：渲染登录/注册页
 */
export function AuthRoute({ children }: AuthRouteProps) {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
