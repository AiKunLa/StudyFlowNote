/**
 * MaterialCard - 素材卡片组件
 *
 * 功能：
 * - 显示素材基本信息（标题、类型、状态、创建时间）
 * - 显示素材类型图标
 * - 显示状态标签
 * - 处理选中状态
 * - 处理删除操作
 */

import { memo, useCallback } from 'react';
import { FileText, FileType, File, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Material, MaterialType, MaterialStatus } from '@/services/material.service';

interface MaterialCardProps {
  material: Material;
  isSelected?: boolean;
  onSelect?: (material: Material) => void;
  onDelete?: (materialId: string) => void;
}

const STATUS_LABELS: Record<MaterialStatus, string> = {
  UPLOADING: '上传中',
  PARSING: '解析中',
  READY: '就绪',
  FAILED: '失败',
};

const TYPE_ICONS: Record<MaterialType, React.ReactNode> = {
  PDF: <FileText className="w-4 h-4" />,
  MARKDOWN: <FileType className="w-4 h-4" />,
  TEXT: <File className="w-4 h-4" />,
};

const TYPE_LABELS: Record<MaterialType, string> = {
  PDF: 'PDF',
  MARKDOWN: 'MD',
  TEXT: 'TXT',
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}

export const MaterialCard = memo(function MaterialCard({
  material,
  isSelected = false,
  onSelect,
  onDelete,
}: MaterialCardProps) {
  const handleCardClick = useCallback(() => {
    onSelect?.(material);
  }, [material, onSelect]);

  const handleDeleteClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onDelete?.(material.id);
    },
    [material.id, onDelete],
  );

  const statusLabel = STATUS_LABELS[material.status] || material.status;
  const isProcessing = material.status === 'UPLOADING' || material.status === 'PARSING';

  return (
    <div
      className={cn(
        'group relative flex flex-col gap-2 p-4 rounded-xl border bg-white cursor-pointer transition-all',
        'hover:shadow-md hover:border-gray-300',
        isSelected
          ? 'border-blue-500 ring-2 ring-blue-100'
          : 'border-gray-200',
      )}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick();
        }
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-600 shrink-0">
            {TYPE_ICONS[material.type]}
          </div>
          <div className="min-w-0">
            <h4 className="text-sm font-medium text-gray-900 truncate">
              {material.title}
            </h4>
            <p className="text-xs text-gray-500">
              {TYPE_LABELS[material.type]}
            </p>
          </div>
        </div>

        {/* Delete Button */}
        <button
          data-testid="delete-button"
          type="button"
          onClick={handleDeleteClick}
          className={cn(
            'p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors',
            'opacity-0 group-hover:opacity-100 focus:opacity-100',
          )}
          aria-label="删除素材"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-1">
        <span className="text-xs text-gray-400">
          {formatDate(material.createdAt)}
        </span>
        <span
          className={cn(
            'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium',
            material.status === 'READY' && 'bg-green-100 text-green-700',
            material.status === 'UPLOADING' && 'bg-blue-100 text-blue-700',
            material.status === 'PARSING' && 'bg-yellow-100 text-yellow-700',
            material.status === 'FAILED' && 'bg-red-100 text-red-700',
          )}
        >
          {statusLabel}
          {isProcessing && (
            <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          )}
        </span>
      </div>
    </div>
  );
});