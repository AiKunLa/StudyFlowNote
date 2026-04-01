/**
 * StudioPanel - Studio 工具面板
 *
 * 功能：
 * - Studio 标题
 * - 2列网格布局功能卡片
 * - 空白状态引导
 * - 添加笔记按钮
 */

import { Plus, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TOOLS = [
  { name: '音频概览', icon: '🎧' },
  { name: '演示文稿', icon: '📊' },
  { name: '视频概览', icon: '🎬' },
  // { name: '思维导图', icon: '🧠' },
  // { name: '报告', icon: '📝' },
  // { name: '闪卡', icon: '🃏' },
  // { name: '测验', icon: '❓' },
  // { name: '信息图', icon: '📈' },
  // { name: '数据表格', icon: '📋' },
];

export function StudioPanel() {
  return (
    <div className="flex flex-col h-full p-4">
      {/* 标题 */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="font-semibold text-gray-900">Studio</h2>
      </div>

      {/* 功能卡片网格 - 2列 */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {TOOLS.map((tool) => (
          <button
            key={tool.name}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors min-h-[80px]"
          >
            <span className="text-2xl mb-1">{tool.icon}</span>
            <span className="text-xs text-gray-600 text-center">{tool.name}</span>
          </button>
        ))}
      </div>

      {/* 空白状态引导 */}
      <div className="flex-1 min-h-0 flex flex-col items-center justify-center text-center">
        <Wand2 className="h-8 w-8 text-gray-300 mb-2" />
        <p className="text-sm text-gray-400">
          添加来源解锁更多工具
        </p>
      </div>

      {/* 添加笔记按钮 - 右下角悬浮 */}
      <div className="flex justify-end mt-auto pt-4">
        <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-4 py-2">
          <Plus className="h-4 w-4 mr-1" />
          添加笔记
        </Button>
      </div>
    </div>
  );
}
