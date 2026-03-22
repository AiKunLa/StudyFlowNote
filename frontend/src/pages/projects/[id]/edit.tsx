import { useParams } from 'react-router';

export function EditProjectPage() {
  const { id } = useParams();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">编辑项目</h1>
        <p className="text-muted-foreground">项目 ID: {id}</p>
      </div>
      <div className="rounded-lg border bg-card p-8 text-center">
        <p className="text-muted-foreground">Edit Project Page - 待实现</p>
      </div>
    </div>
  );
}
