/**
 * MaterialPreviewDialog - 素材预览对话框组件
 *
 * 功能：
 * - 展示素材内容
 * - Markdown 格式渲染
 */

import { memo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { Material } from '@/services/material.service';

interface MaterialPreviewDialogProps {
  material: Material | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const MaterialPreviewDialog = memo(function MaterialPreviewDialog({
  material,
  open,
  onOpenChange,
}: MaterialPreviewDialogProps) {
  // Don't render dialog if no material
  if (!material) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{material.title}</DialogTitle>
        </DialogHeader>
        <div className="prose prose-sm max-w-none">
          {material.rawText ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {material.rawText}
            </ReactMarkdown>
          ) : (
            <p className="text-gray-500 italic">暂无内容</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
});
