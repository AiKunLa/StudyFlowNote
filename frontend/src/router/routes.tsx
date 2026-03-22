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

export const routes: RouteObject[] = [
  {
    path: '/',
    Component: AppLayout,
    children: [
      { index: true, Component: DashboardPage },
      { path: 'projects', Component: ProjectListPage },
      { path: 'projects/new', Component: CreateProjectPage },
      { path: 'projects/:id', Component: ProjectDetailPage },
      { path: 'projects/:id/edit', Component: EditProjectPage },
      { path: 'materials', Component: MaterialListPage },
      { path: 'plan/:id', Component: PlanDetailPage },
      { path: 'tasks', Component: TodayTasksPage },
      { path: 'tasks/:id', Component: TaskDetailPage },
      { path: 'tasks/:id/learn', Component: TaskLearnPage },
      { path: 'tasks/:id/quiz', Component: TaskQuizPage },
      { path: 'quiz/:id/result', Component: QuizResultPage },
      { path: 'review', Component: ReviewCenterPage },
    ],
  },
];
