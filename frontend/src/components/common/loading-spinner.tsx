/**
 * LoadingSpinner 组件 - 加载状态指示器
 *
 * 作用：
 * - 显示异步操作（如 API 请求）进行中的加载状态
 * - 使用 lucide-react 的 Loader2 图标（自带旋转动画）
 *
 * 特性：
 * - 支持三种尺寸：sm（16px）、md（32px）、lg（48px）
 * - 支持自定义 className
 * - 使用 Tailwind 的 animate-spin 实现旋转动画
 *
 * 使用方式：
 * ```tsx
 * // 基本用法
 * <LoadingSpinner />
 *
 * // 自定义尺寸
 * <LoadingSpinner size="lg" />
 *
 * // 自定义样式
 * <LoadingSpinner className="text-blue-500" />
 * ```
 */

import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

/** LoadingSpinner 组件属性 */
interface LoadingSpinnerProps {
  /** 自定义 CSS 类名 */
  className?: string;
  /** 尺寸大小 */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * 尺寸与图标的映射
 *
 * - sm: 16x16px - 适用于按钮内或紧凑布局
 * - md: 32x32px - 默认值，适用于大多数场景
 * - lg: 48x48px - 适用于全屏加载或页面级加载
 */
const sizeClasses = {
  sm: 'h-4 w-4',  // 16px
  md: 'h-8 w-8',  // 32px
  lg: 'h-12 w-12', // 48px
};

/**
 * LoadingSpinner 组件
 */
export function LoadingSpinner({ className, size = 'md' }: LoadingSpinnerProps) {
  return (
    <Loader2
      className={cn(
        // 旋转动画
        'animate-spin',
        // 默认颜色
        'text-muted-foreground',
        // 尺寸
        sizeClasses[size],
        // 自定义样式
        className
      )}
    />
  );
}
