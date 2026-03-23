/**
 * Sidebar 组件 - 应用侧边栏导航
 *
 * 作用：
 * - 提供应用的主要导航菜单
 * - 支持折叠/展开模式
 * - 当前路由高亮显示
 *
 * 特性：
 * - 使用 lucide-react 图标库
 * - 使用 NavLink 实现自动高亮
 * - 折叠时只显示图标，展开时显示图标+文字
 * - 状态由 Zustand store 管理
 *
 * 导航项目：
 * - 首页（仪表盘）
 * - 项目（学习项目管理）
 * - 资料（资料中心）
 * - 任务（今日任务）
 * - 复习（复习中心）
 */

import { NavLink } from 'react-router';
import {
  LayoutDashboard,  // 首页图标
  FolderKanban,     // 项目图标
  FileText,         // 资料图标
  CheckSquare,      // 任务图标
  ClipboardList,    // 复习图标
  ChevronLeft,      // 展开时显示-收起按钮
  ChevronRight,     // 折叠时显示-展开按钮
  LogOut,           // 登出图标
} from 'lucide-react';
import { useUIStore } from '@/stores/ui.store';
import { useAuthStore } from '@/stores/auth.store';
import { cn } from '@/lib/utils';

/** 导航项配置类型 */
interface NavItem {
  /** 路由路径 */
  path: string;
  /** 图标组件 */
  icon: typeof LayoutDashboard;
  /** 显示文字 */
  label: string;
}

/**
 * 导航配置数组
 *
 * 定义侧边栏的导航项
 */
const navItems: NavItem[] = [
  { path: '/', icon: LayoutDashboard, label: '首页' },
  { path: '/projects', icon: FolderKanban, label: '项目' },
  { path: '/materials', icon: FileText, label: '资料' },
  { path: '/tasks', icon: CheckSquare, label: '任务' },
  { path: '/review', icon: ClipboardList, label: '复习' },
];

/**
 * Sidebar 组件
 *
 * 使用 fixed 定位固定在左侧
 * 高度为整个视口高度（h-screen）
 * 宽度根据折叠状态变化（w-16 折叠 / w-64 展开）
 */
export function Sidebar() {
  // 从 Zustand store 获取侧边栏状态和切换方法
  const { sidebarCollapsed, toggleSidebar } = useUIStore();
  // 获取登出方法
  const { logout } = useAuthStore();

  return (
    <aside
      className={cn(
        // 固定定位
        'fixed left-0 top-0 z-40 h-screen',
        // 背景和边框
        'bg-card border-r',
        // 过渡动画
        'transition-all duration-200',
        // 宽度根据状态变化
        sidebarCollapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex h-full flex-col">
        {/* 头部区域 - Logo 和折叠按钮 */}
        <div className="flex h-16 items-center justify-between border-b px-4">
          {/* 非折叠时显示 Logo */}
          {!sidebarCollapsed && (
            <span className="font-bold text-lg">StudyFlow</span>
          )}
          {/* 折叠/展开按钮 */}
          <button
            onClick={toggleSidebar}
            className="rounded-md p-1.5 hover:bg-muted"
            aria-label={sidebarCollapsed ? '展开侧边栏' : '折叠侧边栏'}
          >
            {sidebarCollapsed ? (
              <ChevronRight size={20} />
            ) : (
              <ChevronLeft size={20} />
            )}
          </button>
        </div>

        {/* 导航菜单 */}
        <nav className="flex-1 space-y-1 p-2">
          {navItems.map(({ path, icon: Icon, label }) => (
            <NavLink
              key={path}
              to={path}
              // exact 匹配：只有路径完全相等时才高亮
              // 对于首页（/），使用 end prop 确保精确匹配
              end={path === '/'}
              // NavLink 的 className 可以接收函数，接收 isActive 状态
              className={({ isActive }) =>
                cn(
                  // 基础样式
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  // 激活状态样式
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    // 非激活状态样式
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )
              }
            >
              {/* 导航图标 */}
              <Icon size={20} />
              {/* 非折叠时显示文字 */}
              {!sidebarCollapsed && <span>{label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* 登出按钮 */}
        <div className="border-t p-2">
          <button
            onClick={logout}
            className={cn(
              'flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium',
              'text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            <LogOut size={20} />
            {!sidebarCollapsed && <span>登出</span>}
          </button>
        </div>
      </div>
    </aside>
  );
}
