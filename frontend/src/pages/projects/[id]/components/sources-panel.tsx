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
import { ChevronDown, ChevronRight, Plus, Search, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function SourcesPanel() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  if (isCollapsed) {
    return (
      <div className="flex flex-col items-center pt-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(false)}
          className="text-gray-500"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full p-4">
      {/* 标题行 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ChevronDown
            className="h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600"
            onClick={() => setIsCollapsed(true)}
          />
          <h2 className="font-semibold text-gray-900">来源</h2>
        </div>
      </div>

      {/* 添加来源按钮 */}
      <Button className="w-full mb-4 bg-blue-500 hover:bg-blue-600 text-white">
        <Plus className="h-4 w-4 mr-2" />
        添加来源
      </Button>

      {/* 搜索框 */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="搜索..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9 pr-16"
        />
        {/* 过滤药丸标签 */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
          <span className="px-2 py-0.5 text-xs bg-blue-100 text-blue-600 rounded-full">
            Web
          </span>
          <span className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-full">
            Fast Research
          </span>
        </div>
      </div>

      {/* 文件列表区域 - 空白状态 */}
      <div className="flex-1 min-h-0 flex flex-col items-center justify-center text-center">
        <FileText className="h-12 w-12 text-gray-300 mb-3" />
        <p className="text-sm text-gray-400 max-w-[180px]">
          上传 PDF、文本、视频等开始使用
        </p>
      </div>
    </div>
  );
}
