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

export function ProjectCard({ project, onClick, onDelete: _onDelete, onEdit: _onEdit }: ProjectCardProps) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  return (
    <div
      className="group relative cursor-pointer rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-200 hover:shadow-md hover:border-gray-200"
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
              // Archive 处理
              setMenuOpen(false);
            }}
          >
            <Archive className="h-4 w-4 text-gray-400" />
            Archive
          </button>
          <button
            className="flex w-full items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-50"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </button>
        </div>
      )}

      {/* 标题 */}
      <h3 className="pr-8 text-base font-semibold text-gray-900 truncate">
        {project.name}
      </h3>

      {/* 目标/描述 */}
      {project.goal && (
        <p className="mt-2 text-sm text-gray-500 line-clamp-2">
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

      {/* 底部时间 */}
      <div className="mt-3 text-xs text-gray-300">
        创建于 {formatDate(project.createdAt)}
      </div>
    </div>
  );
}
