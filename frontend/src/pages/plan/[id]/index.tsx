import { useParams } from 'react-router';

export function PlanDetailPage() {
  const { id } = useParams();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">学习计划</h1>
        <p className="text-muted-foreground">计划 ID: {id}</p>
      </div>
      <div className="rounded-lg border bg-card p-8 text-center">
        <p className="text-muted-foreground">Plan Detail Page - 待实现</p>
      </div>
    </div>
  );
}
