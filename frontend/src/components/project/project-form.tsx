/**
 * ProjectForm 组件 - 创建/编辑项目表单
 *
 * 作用：
 * - 创建新项目表单
 * - 编辑已有项目表单（复用此组件）
 *
 * 使用方式：
 * ```tsx
 * <ProjectForm
 *   onSuccess={() => setIsOpen(false)}
 *   onCancel={() => setIsOpen(false)}
 * />
 * ```
 */

import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { projectService } from '@/services';
import { HttpError } from '@/services/http';

interface ProjectFormProps {
  /** 创建成功后的回调 */
  onSuccess?: () => void;
  /** 取消按钮的回调 */
  onCancel?: () => void;
}

/**
 * 项目表单组件
 */
export function ProjectForm({ onSuccess, onCancel }: ProjectFormProps) {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsLoading(true);
    setError('');
    try {
      const response = await projectService.create({ name, goal });
      const project = response.data.data;
      navigate(`/projects/${project.id}`);
      onSuccess?.();
    } catch (err) {
      if (err instanceof HttpError) {
        setError(err.apiMessage || '创建项目失败');
      } else {
        setError('创建项目失败');
      }
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
          {isLoading ? '创建中...' : '创建'}
        </Button>
      </div>
    </form>
  );
}
