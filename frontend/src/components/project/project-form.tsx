/**
 * ProjectForm 组件 - 创建/编辑项目表单
 *
 * 作用：
 * - 创建新项目表单
 * - 编辑已有项目表单
 *
 * 使用方式：
 * ```tsx
 * // 创建模式
 * <ProjectForm onSuccess={() => setIsOpen(false)} />
 *
 * // 编辑模式
 * <ProjectForm
 *   project={existingProject}
 *   onSuccess={() => setIsOpen(false)}
 *   onCancel={() => setIsOpen(false)}
 * />
 * ```
 */

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useProjectStore } from '@/stores/project.store';
import type { Project } from '@/services/project.service';

interface ProjectFormProps {
  /** 要编辑的项目（不传则为创建模式） */
  project?: Project;
  /** 创建/编辑成功后的回调 */
  onSuccess?: () => void;
  /** 取消按钮的回调 */
  onCancel?: () => void;
}

/**
 * 项目表单组件
 * 支持创建和编辑两种模式
 */
export function ProjectForm({ project, onSuccess, onCancel }: ProjectFormProps) {
  const isEditMode = !!project;
  const [name, setName] = useState(project?.name || '');
  const [goal, setGoal] = useState(project?.goal || '');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  /** 使用 store 的方法，数据会自动同步到 store */
  const { createProject, updateProject } = useProjectStore();

  // 当 project prop 变化时更新表单
  useEffect(() => {
    if (project) {
      setName(project.name);
      setGoal(project.goal || '');
    }
  }, [project]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsLoading(true);
    setError('');
    try {
      if (isEditMode && project) {
        // 编辑模式 - 使用 store 方法，会自动更新列表
        await updateProject(project.id, { name, goal });
        onSuccess?.();
      } else {
        // 创建模式 - 使用 store 方法，会自动添加到列表
        const newProject = await createProject({ name, goal });
        onSuccess?.();
        // 跳转到新创建的项目详情页
        navigate(`/projects/${newProject.id}`);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : (isEditMode ? '更新项目失败' : '创建项目失败');
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="rounded-md bg-red-50 p-3 text-sm text-red-500">
          {error}
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor="name">项目名称 *</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="输入项目名称"
          required
          disabled={isLoading}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="goal">学习目标</Label>
        <Input
          id="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="输入学习目标（可选）"
          disabled={isLoading}
        />
      </div>
      <div className="flex justify-end gap-2">
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel} disabled={isLoading}>
            取消
          </Button>
        )}
        <Button type="submit" disabled={isLoading || !name.trim()}>
          {isLoading ? (isEditMode ? '更新中...' : '创建中...') : (isEditMode ? '更新' : '创建')}
        </Button>
      </div>
    </form>
  );
}
