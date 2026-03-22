import { RouterProvider } from 'react-router';
import { router } from '@/router';
import { QueryProvider } from './providers/query-provider';
import { AppProvider } from './providers/app-provider';

export function App() {
  return (
    <AppProvider>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </AppProvider>
  );
}
