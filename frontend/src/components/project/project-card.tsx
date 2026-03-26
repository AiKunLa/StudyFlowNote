/**
 * ProjectCard 组件 - 极简主义风格项目卡片
 *
 * 作用：
 * - 在项目列表页面展示单个项目的信息
 * - 支持点击跳转到项目详情
 * - 悬停时显示更多操作按钮
 * - 点击按钮显示浮出菜单
 *
 * 使用方式：
 * ```tsx
 * <ProjectCard
 *   project={project}
 *   onClick={(p) => navigate(`/projects/${p.id}`)}
 *   onEdit={(p) => handleEdit(p)}
 *   onDelete={(p) => handleDelete(p)}
 * />
 * ```
 */

import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MoreHorizontal, Archive, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { cn } from '@/lib/utils';
import type { Project } from '@/services/project.service';

interface ProjectCardProps {
  project: Project;
  onClick?: (project: Project) => void;
  onDelete?: (project: Project) => void;
  onEdit?: (project: Project) => void;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function ProjectCard({ project, onClick, onDelete, onEdit: _onEdit }: ProjectCardProps) {
  // 导航实例
  const navigate = useNavigate();
  // isHovered 用于控制更多按钮的显示，menuOpen 控制浮出菜单的显示，showDeleteDialog 控制删除确认对话框的显示，isDeleting 用于删除动画效果
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // 点击外部关闭菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [menuOpen]);

  const handleClick = () => {
    if (onClick) {
      onClick(project);
    } else {
      navigate(`/projects/${project.id}`);
    }
  };

  const handleMoreClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuOpen(false);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    setShowDeleteDialog(false);
    setIsDeleting(true);
    // 等待动画完成后调用 onDelete
    setTimeout(() => {
      onDelete?.(project);
    }, 300);
  };

  return (
    <>
      <div
        className={cn(
          "group relative cursor-pointer rounded-2xl border border-gray-300 bg-white p-5 transition-all duration-300 min-h-[180px]",
          "hover:-translate-y-1 hover:shadow-xl hover:border-gray-200",
          !isHovered && "shadow-md",
          isDeleting && "opacity-0 scale-95"
        )}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* 右上角更多按钮 - 悬停淡入 */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "absolute right-3 top-3 h-8 w-8 opacity-0 transition-opacity duration-200",
            "text-blue-500 hover:text-blue-600 hover:bg-blue-50",
            "group-hover:opacity-100",
            isHovered && "opacity-100"
          )}
          onClick={handleMoreClick}
          aria-label="更多选项"
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>

        {/* 浮出菜单 */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute right-3 top-10 z-50 w-36 rounded-xl border border-gray-100 bg-white py-1 shadow-lg ring-1 ring-gray-900/5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="flex w-full items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <Archive className="h-4 w-4 text-gray-400" />
              归档
            </button>
            <button
              className="flex w-full items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-50"
              onClick={handleDeleteClick}
            >
              <Trash2 className="h-4 w-4" />
              删除
            </button>
          </div>
        )}

        {/* 标题 */}
        <h3 className="pr-8 text-lg font-semibold text-gray-900 truncate">
          {project.name}
        </h3>

        {/* 目标/描述 */}
        {project.goal && (
          <p className="mt-3 text-sm text-gray-500 line-clamp-3 leading-relaxed">
            {project.goal}
          </p>
        )}

        {/* 功能数据区域 */}
        <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
          {project.examDate && (
            <span>考试: {formatDate(project.examDate)}</span>
          )}
          {project.mode && (
            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-gray-600">
              {project.mode}
            </span>
          )}
        </div>

        {/* 创建日期 - 右下角 */}
        <div className="absolute bottom-4 right-4 text-xs text-gray-300">
          {formatDate(project.createdAt)}
        </div>
      </div>

      {/* 删除确认对话框 */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>删除项目</AlertDialogTitle>
            <AlertDialogDescription>
              确定要删除项目 "{project.name}" 吗？此操作不可撤销。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={(e) => e.stopPropagation()}>取消</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-500 hover:bg-red-600"
              onClick={(e) => {
                e.stopPropagation();
                confirmDelete();
              }}
            >
              删除
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
