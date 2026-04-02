/**
 * ProjectDetailPage - 项目详情页面
 *
 * 三栏式布局：
 * - Header：应用图标 + 项目名称
 * - 左侧栏：来源管理
 * - 中间栏：对话/聊天
 * - 右侧栏：Studio 工具区
 */

import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useProjectStore } from '@/stores/project.store';
import { SourcesPanel } from './components/sources-panel';
import { ChatPanel } from './components/chat-panel';
import { StudioPanel } from './components/studio-panel';

export function ProjectDetailPage() {
  const { id } = useParams();
  const { currentProject, projects, fetchProject } = useProjectStore();

  useEffect(() => {
    if (id) {
      fetchProject(id);
    }
  }, [id, fetchProject]);

  // 如果 store 中没有当前项目，尝试从 projects 列表中查找
  const project = currentProject || projects.find((p) => p.id === id);

  return (
    <div className="flex flex-col flex-1 min-h-0 bg-white text-gray-900 font-sans">

      <header className="flex flex-col flex-shrink-0  pb-0 md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-black">{project?.name}</h1>
          <p className="text-gray-400 text-sm mt-2">目标：{project?.goal}</p>
          <p className="text-gray-400 text-xs mt-1">创建时间：{project?.createdAt}</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
            </svg>
            归档
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 border border-red-100 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
              </path>
            </svg>
            删除
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row gap-6 ">
        <SourcesPanel />
        <ChatPanel />
        <StudioPanel />
      </main>

    </div>
  );
}
