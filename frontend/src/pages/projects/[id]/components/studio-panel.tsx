/**
 * StudioPanel - Studio 工具面板
 *
 * 功能：
 * - Studio 标题
 * - 2列网格布局功能卡片
 * - 空白状态引导
 * - 添加笔记按钮
 */
import { useState } from 'react';
import { ChevronLeft, Plus, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={
      cn(
        'flex flex-col bg-white border border-gray-200 rounded-2xl  overflow-hidden',
        'transition-all duration-200',
        isCollapsed ? 'basis-12 shrink-0' : 'basis-1/4 shrink-0'
      )
    }>
      <div className="p-5 flex justify-between items-center">
        {!isCollapsed && <h2 className="text-lg font-bold text-gray-900">笔记</h2>}
        <div className={"flex items-center gap-2" + (isCollapsed ? " justify-center w-full" : "")}>
          {
            !isCollapsed &&
            (
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                撰写笔记
              </Button>
            )
          }

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-gray-500"
          >
            {isCollapsed ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </Button>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center text-center p-6">
        <svg className="w-12 h-12 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
          </path>
        </svg>
        <h3 className="text-base font-bold text-gray-900 mb-2">暂无笔记</h3>
        {/* <p className="text-sm text-gray-500">创建您的第一条笔记，记录意见与观察。</p> */}
      </div>
    </div>
  );
}
