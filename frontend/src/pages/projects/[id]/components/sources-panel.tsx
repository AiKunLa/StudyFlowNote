/**
 * SourcesPanel - 来源管理面板
 *
 * 功能：
 * - 来源列表标题 + 折叠功能
 * - 添加来源按钮
 * - 搜索框 + 过滤标签
 * - 文件列表/空白状态
 */

import { useState } from 'react';
import { ChevronLeft, Plus, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function SourcesPanel() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={cn(
      'flex flex-col  bg-white border border-gray-200 rounded-2xl  overflow-hidden',
      'transition-all duration-200',
      isCollapsed ? 'basis-12 shrink-0' : 'basis-1/4 shrink-0'
    )}>
      <div className="p-5 flex justify-between items-center">
        {!isCollapsed && <h2 className="text-lg font-bold text-gray-900">来源</h2>}
        <div className={cn(
          'flex items-center gap-2',
          isCollapsed && 'justify-center w-full'
        )}>
          {
            !isCollapsed &&
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              添加来源
            </Button>
          }
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-gray-500"
          >
            {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </Button>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center text-center p-6">
        <svg className="w-12 h-12 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
          </path>
        </svg>
        <h3 className="text-base font-bold text-gray-900 mb-2">暂无来源</h3>
        {/* <p className="text-sm text-gray-500">添加您的第一个来源开始构建知识库。</p> */}
      </div>
    </div>
  );
}
