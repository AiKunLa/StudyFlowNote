import { Button } from "@/components/ui/button";

export function TestButton() {
  return (
    <div className="flex gap-4 p-8">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
}
