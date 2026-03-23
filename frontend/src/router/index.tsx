/**
 * Router 入口文件
 *
 * 作用：
 * - 创建 React Router 浏览器路由器实例
 * - 配置路由的基础路径
 *
 * basename 说明：
 * - 设置为 '/' 支持在域名的根路径下访问
 * - 如果应用部署在子路径（如 /app/），需要改为 '/app'
 */

import { createBrowserRouter } from 'react-router';
import { routes } from './routes';

/**
 * 浏览器路由器实例
 *
 * 使用 createBrowserRouter 而非 createMemoryRouter
 * - 适用于 SPA 应用
 * - 支持浏览器历史记录
 * - 允许用户使用浏览器的前进/后退按钮
 */
export const router = createBrowserRouter(routes, {
  basename: '/',
});
