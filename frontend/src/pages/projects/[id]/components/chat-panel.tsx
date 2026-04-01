/**
 * ChatPanel - 对话/聊天面板
 *
 * 功能：
 * - 对话标题 + 操作图标
 * - 中央上传引导区域
 * - 底部聊天输入框
 */

import { useState } from 'react';
import { MoreHorizontal, Send, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ChatPanel() {
  const [message, setMessage] = useState('');

  return (
    <div className="flex flex-col h-full">
      {/* 标题行 */}
      <div className="flex items-center justify-between px-4 py-3 border-b bg-white">
        <h2 className="font-semibold text-gray-900">对话</h2>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {/* 中央上传引导区域 */}
      <div className="flex-1 min-h-0 flex flex-col items-center justify-center px-4">
        {/* 高亮浅蓝色圆形上传图标 */}
        <div className="w-20 h-20 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center mb-6">
          <Upload className="h-8 w-8 text-blue-500" />
        </div>

        {/* 标题文案 */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          添加来源即可开始使用
        </h3>

        {/* 上传来源按钮 */}
        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full">
          上传来源
        </Button>
      </div>

      {/* 底部聊天输入框 */}
      <div className="p-4 bg-white border-t">
        <div className="relative flex items-center gap-2">
          <Input
            placeholder="输入消息..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 pr-10"
          />
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-2 h-8 w-8 text-blue-500 hover:text-blue-600 hover:bg-blue-50"
            disabled={!message.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
