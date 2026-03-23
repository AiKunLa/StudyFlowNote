/**
 * ErrorBoundary 组件 - 错误边界
 *
 * 作用：
 * - 捕获子组件的 JavaScript 错误
 * - 防止错误传播导致整个应用崩溃
 * - 显示友好的错误提示 UI
 *
 * React 错误边界说明：
 * - 错误边界是 React 16 引入的特性
 * - 只有 class 组件可以作为错误边界
 * - 它能捕获子组件渲染、生命周期、构造函数中的错误
 * - 无法捕获：事件处理器、异步代码、定时器、SSR 错误
 *
 * 使用方式：
 * ```tsx
 * // 基本用法 - 包裹在应用顶层
 * <ErrorBoundary>
 *   <App />
 * </ErrorBoundary>
 *
 * // 自定义错误 UI
 * <ErrorBoundary fallback={<CustomErrorUI />}>
 *   <App />
 * </ErrorBoundary>
 * ```
 */

import { Component, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';

/** ErrorBoundary 状态 */
interface ErrorBoundaryState {
  /** 是否捕获到错误 */
  hasError: boolean;
  /** 捕获的错误对象 */
  error: Error | null;
}

/** ErrorBoundary 属性 */
interface ErrorBoundaryProps {
  /** 子组件 */
  children: ReactNode;
  /** 自定义错误兜底 UI（可选） */
  fallback?: ReactNode;
}

/**
 * ErrorBoundary 类组件
 *
 * 生命周期方法：
 * - getDerivedStateFromError: 在渲染前更新状态
 * - componentDidCatch: 记录错误信息（副作用）
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    // 初始化状态 - 没有错误
    this.state = { hasError: false, error: null };
  }

  /**
   * 从错误中派生新状态
   *
   * 当子组件抛出错误时被调用
   * 返回新的状态对象，触发组件重新渲染错误 UI
   */
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  /**
   * 错误捕获回调
   *
   * 执行副作用操作，如记录错误日志
   * 无法在此处调用 setState
   */
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // 将错误信息打印到控制台，便于调试
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    // 如果捕获到错误，显示错误 UI
    if (this.state.hasError) {
      // 如果传入了自定义 fallback，使用自定义 UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // 默认错误 UI
      return (
        <div className="flex flex-col items-center justify-center min-h-[200px] p-8">
          <h2 className="text-xl font-semibold text-destructive mb-2">
            出错了
          </h2>
          <p className="text-muted-foreground mb-4">
            {this.state.error?.message || '发生了未知错误'}
          </p>
          {/* 重试按钮 - 清除错误状态，使组件重新渲染 */}
          <Button
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            重试
          </Button>
        </div>
      );
    }

    // 没有错误，正常渲染子组件
    return this.props.children;
  }
}
