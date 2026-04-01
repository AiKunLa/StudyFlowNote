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
    <div className="bg-white text-gray-900 font-sans min-h-screen p-2 lg:p-4 flex flex-col">

      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-black">j</h1>
          <p className="text-gray-400 text-sm mt-2">添加描述...</p>
          <p className="text-gray-400 text-xs mt-1">创建于15天前 • 更新于15天前</p>
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

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-[600px]">

        <div className="bg-white border border-gray-200 rounded-2xl flex flex-col overflow-hidden">
          <div className="p-5 flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-900">来源</h2>
            <div className="flex items-center gap-2">
              <button
                className="bg-[#3b82f6] hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4">
                  </path>
                </svg>
                添加来源
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                  </path>
                </svg>
              </button>
              <button className="text-gray-400 hover:text-gray-600 p-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7">
                  </path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center text-center p-6">
            <svg className="w-12 h-12 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
              </path>
            </svg>
            <h3 className="text-base font-bold text-gray-900 mb-2">暂无来源</h3>
            <p className="text-sm text-gray-500">添加您的第一个来源开始构建知识库。</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl flex flex-col overflow-hidden">
          <div className="p-5 flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-900">笔记</h2>
            <div className="flex items-center gap-2">
              <button
                className="bg-[#3b82f6] hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4">
                  </path>
                </svg>
                撰写笔记
              </button>
              <button className="text-gray-400 hover:text-gray-600 p-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7">
                  </path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center text-center p-6">
            <svg className="w-12 h-12 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
              </path>
            </svg>
            <h3 className="text-base font-bold text-gray-900 mb-2">暂无笔记</h3>
            <p className="text-sm text-gray-500">创建您的第一条笔记，记录意见与观察。</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl flex flex-col overflow-hidden relative">
          <div className="p-5 flex justify-between items-center border-b border-transparent">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                </path>
              </svg>
              与笔记本对话
            </h2>
            <button className="text-gray-500 hover:text-gray-800 text-sm flex items-center gap-1 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              会话
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center text-center p-6 pb-20">
            <svg className="w-14 h-14 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z">
              </path>
            </svg>
            <p className="text-sm text-gray-500 leading-relaxed">开始使用笔记本进行对话，提出问题以更好地理解内容</p>
          </div>

          <div className="border-t border-gray-100 p-4 bg-white mt-auto">
            <p className="text-[11px] text-gray-400 mb-3 leading-tight">上下文中未包含来源或注释。点击卡片上的图标即可显示来源或注释。</p>
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs text-gray-400">模型</span>
              <button
                className="text-xs border border-gray-200 rounded-md px-2.5 py-1 flex items-center gap-1 text-gray-600 hover:bg-gray-50 transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                  </path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                默认
              </button>
            </div>
            <div className="relative flex items-center">
              <input type="text" placeholder="向您的来源提问... (按 Ctrl+Enter 发送)"
                className="w-full border border-gray-200 rounded-xl pl-4 pr-12 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-shadow bg-gray-50 hover:bg-white focus:bg-white" />
              <button
                  className="absolute right-2 bg-[#93c5fd] hover:bg-blue-500 text-white rounded-lg p-1.5 aspect-square flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                </button>
            </div>
          </div>
        </div>

      </main>

    </div>
  );
}
