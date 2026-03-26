/**
 * ProjectListPage - 项目列表页面
 */

import { useEffect } from 'react';
import { Plus, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ProjectForm, ProjectCard } from '@/components/project';
import { useProjectStore } from '@/stores/project.store';
import type { Project } from '@/services/project.service';

export function ProjectListPage() {
  const {
    projects,
    isLoading,
    error,
    fetchProjects,
    deleteProject,
  } = useProjectStore();

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleDelete = (project: Project) => {
    deleteProject(project.id);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">项目列表</h1>
          <p className="text-muted-foreground">管理您的学习项目</p>
        </div>
        <DialogCreateProject />
      </div>

      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      )}

      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-500">{error}</div>
      )}

      {!isLoading && !error && projects.length === 0 && (
        <div className="rounded-lg border bg-card p-8 text-center">
          <p className="text-muted-foreground">暂无项目，点击上方按钮创建</p>
        </div>
      )}

      {!isLoading && !error && projects.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * 创建项目对话框组件
 * 状态保持在组件内部（UI 私有状态）
 */
function DialogCreateProject() {
  const [isOpen, setIsOpen] = useState(false);
  const { fetchProjects } = useProjectStore();

  const handleSuccess = async () => {
    setIsOpen(false);
    await fetchProjects();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          创建项目
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>创建新项目</DialogTitle>
        </DialogHeader>
        <ProjectForm
          onSuccess={handleSuccess}
          onCancel={() => setIsOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}

import { useState } from 'react';
