/**
 * Services 统一导出
 *
 * 作用：
 * - 统一导出所有 API 服务
 * - 简化页面组件中的导入路径
 *
 * 使用方式：
 * ```typescript
 * // 统一导入
 * import { http, projectService } from '@/services';
 *
 * // 或按需导入
 * import { http } from '@/services/http';
 * import { projectService } from '@/services/project.service';
 * ```
 */

// HTTP 客户端
export { http, setAuthToken, clearAuthToken, getAuthToken, HttpError, ErrorCode } from './http';

// API 通用类型
export * from './api.types';

// 认证
export * from './auth.service';

// 项目管理
export * from './project.service';

// 资料中心
export * from './material.service';

// 任务管理
export * from './task.service';

// 学习计划
export * from './plan.service';

// 测验
export * from './quiz.service';

// 复习中心
export * from './review.service';

// AI 问答
export * from './chat.service';

// 笔记
export * from './note.service';
