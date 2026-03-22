import { NavLink } from 'react-router';
import {
  LayoutDashboard,
  FolderKanban,
  FileText,
  CheckSquare,
  ClipboardList,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useUIStore } from '@/stores/ui.store';
import { cn } from '@/lib/utils';

const navItems = [
  { path: '/', icon: LayoutDashboard, label: '首页' },
  { path: '/projects', icon: FolderKanban, label: '项目' },
  { path: '/materials', icon: FileText, label: '资料' },
  { path: '/tasks', icon: CheckSquare, label: '任务' },
  { path: '/review', icon: ClipboardList, label: '复习' },
];

export function Sidebar() {
  const { sidebarCollapsed, toggleSidebar } = useUIStore();

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 h-screen bg-card border-r transition-all duration-200',
        sidebarCollapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center justify-between border-b px-4">
          {!sidebarCollapsed && (
            <span className="font-bold text-lg">StudyFlow</span>
          )}
          <button
            onClick={toggleSidebar}
            className="rounded-md p-1.5 hover:bg-muted"
          >
            {sidebarCollapsed ? (
              <ChevronRight size={20} />
            ) : (
              <ChevronLeft size={20} />
            )}
          </button>
        </div>

        <nav className="flex-1 space-y-1 p-2">
          {navItems.map(({ path, icon: Icon, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )
              }
            >
              <Icon size={20} />
              {!sidebarCollapsed && <span>{label}</span>}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
