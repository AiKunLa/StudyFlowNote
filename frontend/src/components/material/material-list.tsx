/**
 * MaterialList - 素材列表组件
 *
 * 功能：
 * - 显示素材列表
 * - 搜索和过滤素材
 * - 加载状态
 * - 空状态
 * - 错误状态和重试
 */

import { useEffect, useState, useCallback, useMemo } from 'react';
import { useMaterialStore } from '@/stores/material.store';
import { MaterialCard } from './material-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, RefreshCw, FileText, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Material, MaterialType } from '@/services/material.service';

interface MaterialListProps {
  projectId: string;
  onSelectMaterial?: (material: Material) => void;
  onAddMaterial?: () => void;
}

type FilterType = 'ALL' | MaterialType;

const FILTER_OPTIONS: { value: FilterType; label: string }[] = [
  { value: 'ALL', label: '全部' },
  { value: 'PDF', label: 'PDF' },
  { value: 'MARKDOWN', label: '文档' },
  { value: 'TEXT', label: '文本' },
];

export function MaterialList({
  projectId,
  onSelectMaterial,
  onAddMaterial,
}: MaterialListProps) {
  const {
    materials,
    isLoading,
    error,
    fetchMaterials,
    deleteMaterial,
    setCurrentMaterial,
    clearError,
  } = useMaterialStore();

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<FilterType>('ALL');
  const [isRetrying, setIsRetrying] = useState(false);

  // Fetch materials on mount or projectId change
  useEffect(() => {
    if (projectId) {
      fetchMaterials(projectId);
    }
  }, [projectId, fetchMaterials]);

  // Handle retry with loading state
  const handleRetry = useCallback(async () => {
    setIsRetrying(true);
    clearError();
    await fetchMaterials(projectId);
    setIsRetrying(false);
  }, [projectId, fetchMaterials, clearError]);

  // Handle material selection
  const handleSelectMaterial = useCallback(
    (material: Material) => {
      setCurrentMaterial(material);
      onSelectMaterial?.(material);
    },
    [setCurrentMaterial, onSelectMaterial],
  );

  // Handle material deletion
  const handleDeleteMaterial = useCallback(
    async (materialId: string) => {
      await deleteMaterial(materialId);
    },
    [deleteMaterial],
  );

  // Filter materials based on search term and type
  const filteredMaterials = useMemo(() => {
    return materials.filter((material) => {
      const matchesSearch = material.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesType =
        filterType === 'ALL' || material.type === filterType;
      return matchesSearch && matchesType;
    });
  }, [materials, searchTerm, filterType]);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div
          data-testid="loading-spinner"
          className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin"
        />
        <p className="mt-3 text-sm text-gray-500">加载中...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-4">
          <FileText className="w-6 h-6 text-red-400" />
        </div>
        <p className="text-sm text-red-600 mb-4">{error}</p>
        <Button
          variant="outline"
          size="sm"
          onClick={handleRetry}
          disabled={isRetrying}
        >
          <RefreshCw className={cn('w-4 h-4 mr-1', isRetrying && 'animate-spin')} />
          {isRetrying ? '重试中...' : '重试'}
        </Button>
      </div>
    );
  }

  // Empty state
  if (materials.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
          <FileText className="w-6 h-6 text-gray-400" />
        </div>
        <h3 className="text-base font-medium text-gray-900 mb-1">暂无资料</h3>
        <p className="text-sm text-gray-500 mb-4">点击上方按钮添加第一个资料</p>
        {onAddMaterial && (
          <Button size="sm" onClick={onAddMaterial}>
            <Plus className="w-4 h-4 mr-1" />
            添加资料
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Search and Filter */}
      <div className="flex flex-col gap-2">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="search"
            placeholder="搜索资料..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-1">
          {FILTER_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setFilterType(option.value)}
              className={cn(
                'px-3 py-1 text-xs rounded-full transition-colors',
                filterType === option.value
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material List */}
      {filteredMaterials.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-sm text-gray-500">没有找到匹配的资料</p>
        </div>
      ) : (
        <div className="grid gap-3">
          {filteredMaterials.map((material) => (
            <MaterialCard
              key={material.id}
              material={material}
              onSelect={handleSelectMaterial}
              onDelete={handleDeleteMaterial}
            />
          ))}
        </div>
      )}
    </div>
  );
}