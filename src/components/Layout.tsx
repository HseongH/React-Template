import { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface ILayout {
  children: ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <div className="to-gray-960 relative isolate bg-gradient-to-bl from-gray-100 via-sky-100 via-30% to-gray-100 dark:from-gray-900 dark:via-sky-950 dark:via-20% dark:to-gray-900 dark:text-slate-50">
      <Sidebar />

      <main className="ml-64 min-h-screen px-4 py-6">
        <div className="rounded-md">{children}</div>
      </main>
    </div>
  );
}

export default Layout;
