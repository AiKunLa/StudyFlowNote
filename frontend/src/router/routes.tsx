/**
 * 路由配置文件
 *
 * 作用：
 * - 定义应用的所有路由结构
 * - 关联页面组件与路由路径
 * - 配置布局组件（Layout Routes）
 *
 * 路由结构设计说明：
 * - 使用单层布局结构，所有页面共享 AppLayout
 * - 动态路由参数使用 :paramName 语法（如 :id）
 * - index: true 表示该路径是父路由的默认页面
 *
 * 路由列表：
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

import { type RouteObject } from 'react-router';
import { AppLayout } from '@/components/layout/app-layout';
import { DashboardPage } from '@/pages/dashboard';
import { ProjectListPage } from '@/pages/projects';
import { CreateProjectPage } from '@/pages/projects/new';
import { ProjectDetailPage } from '@/pages/projects/[id]';
import { EditProjectPage } from '@/pages/projects/[id]/edit';
import { MaterialListPage } from '@/pages/materials';
import { PlanDetailPage } from '@/pages/plan/[id]';
import { TodayTasksPage } from '@/pages/tasks';
import { TaskDetailPage } from '@/pages/tasks/[id]';
import { TaskLearnPage } from '@/pages/tasks/[id]/learn';
import { TaskQuizPage } from '@/pages/tasks/[id]/quiz';
import { QuizResultPage } from '@/pages/quiz/[id]/result';
import { ReviewCenterPage } from '@/pages/review';

/**
 * 应用路由配置数组
 *
 * 所有路由都嵌套在 AppLayout 下，实现统一的页面布局
 */
export const routes: RouteObject[] = [
  {
    // 根路径使用 AppLayout 作为布局组件
    path: '/',
    Component: AppLayout,
    // 子路由通过 <Outlet /> 在布局中渲染
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
