/**
 * SourcesPanel - 来源管理面板
 *
 * 功能：
 * - 来源列表标题 + 折叠功能
 * - 添加来源按钮
 * - 素材列表展示
 * - 上传对话框
 */

import { useState } from 'react';
import { useParams } from 'react-router';
import { ChevronLeft, Plus, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MaterialList } from '@/components/material/material-list';
import { UploadDialog } from '@/components/material/upload-dialog';

export function SourcesPanel() {
  const { id } = useParams();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  return (
    <>
      <div className={cn(
        'flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden',
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
              <Button onClick={() => setIsUploadOpen(true)}>
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
        {!isCollapsed && id && (
          <div className="flex-1 overflow-auto p-4">
            <MaterialList
              projectId={id}
              onAddMaterial={() => setIsUploadOpen(true)}
            />
          </div>
        )}
        {isCollapsed && (
          <div className="flex-1 flex items-center justify-center">
            <span className="text-sm text-gray-400">来源</span>
          </div>
        )}
      </div>

      <UploadDialog
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        projectId={id}
      />
    </>
  );
}
