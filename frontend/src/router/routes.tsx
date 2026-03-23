/**
 * 路由配置文件
 *
 * 作用：
 * - 定义应用的所有路由结构
 * - 关联页面组件与路由路径
 * - 配置布局组件（Layout Routes）
 *
 * 路由懒加载：
 * - 所有页面组件使用 lazy() 进行懒加载
 * - 每个页面会独立打包，实现代码分割
 * - 用户访问时才加载对应页面的代码
 *
 * 路由结构设计说明：
 * - 使用单层布局结构，所有页面共享 AppLayout
 * - 动态路由参数使用 :paramName 语法（如 :id）
 * - index: true 表示该路径是父路由的默认页面
 * - 登录/注册页面为独立路由，不使用 AppLayout
 *
 * 路由列表：
 * /login              - 登录页（独立）
 * /register           - 注册页（独立）
 * /                    - 首页/仪表盘
 * /projects            - 项目列表
 * /projects/new        - 创建项目
 * /projects/:id        - 项目详情（:id 为动态参数）
 * /projects/:id/edit   - 编辑项目
 * /materials           - 资料中心
 * /plan/:id            - 学习计划详情
 * /tasks               - 今日任务
 * /tasks/:id           - 任务详情
 * /tasks/:id/learn     - 任务学习空间
 * /tasks/:id/quiz      - 任务测验
 * /quiz/:id/result     - 测验结果
 * /review              - 复习中心
 */

import React, { lazy } from 'react';
import { type RouteObject } from 'react-router';
import { AppLayout } from '@/components/layout/app-layout';

/**
 * 懒加载函数 - 处理命名导出的页面组件
 *
 * 由于页面组件使用命名导出（export function），需要通过 .then() 提取
 */
function lazyNamedImport<T>(importer: () => Promise<T>, name: keyof T) {
  return lazy(() => importer().then((m) => ({ default: m[name] as React.ComponentType })));
}

// ============================================================
// 懒加载页面组件
// ============================================================

// 认证页面（独立路由，不使用 AppLayout）
const LoginPage = lazyNamedImport(() => import('@/pages/login'), 'LoginPage');
const RegisterPage = lazyNamedImport(() => import('@/pages/register'), 'RegisterPage');

// 首页
const DashboardPage = lazyNamedImport(() => import('@/pages/dashboard'), 'DashboardPage');

// 项目管理
const ProjectListPage = lazyNamedImport(() => import('@/pages/projects'), 'ProjectListPage');
const CreateProjectPage = lazyNamedImport(() => import('@/pages/projects/new'), 'CreateProjectPage');
const ProjectDetailPage = lazyNamedImport(() => import('@/pages/projects/[id]'), 'ProjectDetailPage');
const EditProjectPage = lazyNamedImport(() => import('@/pages/projects/[id]/edit'), 'EditProjectPage');

// 资料中心
const MaterialListPage = lazyNamedImport(() => import('@/pages/materials'), 'MaterialListPage');

// 学习计划
const PlanDetailPage = lazyNamedImport(() => import('@/pages/plan/[id]'), 'PlanDetailPage');

// 任务
const TodayTasksPage = lazyNamedImport(() => import('@/pages/tasks'), 'TodayTasksPage');
const TaskDetailPage = lazyNamedImport(() => import('@/pages/tasks/[id]'), 'TaskDetailPage');
const TaskLearnPage = lazyNamedImport(() => import('@/pages/tasks/[id]/learn'), 'TaskLearnPage');
const TaskQuizPage = lazyNamedImport(() => import('@/pages/tasks/[id]/quiz'), 'TaskQuizPage');

// 测验结果
const QuizResultPage = lazyNamedImport(() => import('@/pages/quiz/[id]/result'), 'QuizResultPage');

// 复习中心
const ReviewCenterPage = lazyNamedImport(() => import('@/pages/review'), 'ReviewCenterPage');

// ============================================================
// 路由配置
// ============================================================

/**
 * 应用路由配置数组
 *
 * 结构：
 * - 独立路由（登录/注册）- 不使用布局组件
 * - 主应用路由 - 嵌套在 AppLayout 下
 */
export const routes: RouteObject[] = [
  // ========================================
  // 独立路由（不需要 AppLayout）
  // ========================================
  { path: '/login', Component: LoginPage },
  { path: '/register', Component: RegisterPage },

  // ========================================
  // 主应用路由（使用 AppLayout）
  // ========================================
  {
    path: '/',
    Component: AppLayout,
    children: [
      // 首页 - 使用 index: true 表示默认子路由
      { index: true, Component: DashboardPage },

      // 项目管理路由组
      { path: 'projects', Component: ProjectListPage },
      { path: 'projects/new', Component: CreateProjectPage },
      { path: 'projects/:id', Component: ProjectDetailPage },
      { path: 'projects/:id/edit', Component: EditProjectPage },

      // 资料中心
      { path: 'materials', Component: MaterialListPage },

      // 学习计划
      { path: 'plan/:id', Component: PlanDetailPage },

      // 任务路由组
      { path: 'tasks', Component: TodayTasksPage },
      { path: 'tasks/:id', Component: TaskDetailPage },
      { path: 'tasks/:id/learn', Component: TaskLearnPage },
      { path: 'tasks/:id/quiz', Component: TaskQuizPage },

      // 测验结果（独立页面）
      { path: 'quiz/:id/result', Component: QuizResultPage },

      // 复习中心
      { path: 'review', Component: ReviewCenterPage },
    ],
  },
];
