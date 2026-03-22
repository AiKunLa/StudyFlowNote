import { useParams } from 'react-router';

export function QuizResultPage() {
  const { id } = useParams();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">测验结果</h1>
        <p className="text-muted-foreground">测验 ID: {id}</p>
      </div>
      <div className="rounded-lg border bg-card p-8 text-center">
        <p className="text-muted-foreground">Quiz Result Page - 待实现</p>
      </div>
    </div>
  );
}
