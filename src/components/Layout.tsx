import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface ILayout {
  children: ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <main className="min-h-screen bg-gray-200 dark:bg-gray-800">
      <div className="container mx-auto flex min-h-full px-6 py-4">
        <Sidebar />

        <div className="flex-1">
          <Header />

          {children}
        </div>
      </div>
    </main>
  );
}

export default Layout;
