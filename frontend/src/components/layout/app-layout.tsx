import { Outlet } from 'react-router';
import { Sidebar } from './sidebar';
import { useUIStore } from '@/stores/ui.store';
import { cn } from '@/lib/utils';

export function AppLayout() {
  const { sidebarCollapsed } = useUIStore();

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main
        className={cn(
          'flex-1 overflow-auto transition-all duration-200',
          sidebarCollapsed ? 'ml-16' : 'ml-64'
        )}
      >
        <div className="container mx-auto p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
