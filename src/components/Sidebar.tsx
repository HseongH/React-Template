import { HomeIcon } from '@heroicons/react/16/solid';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="fixed inset-y-0 left-0 w-64 border-r border-slate-200 bg-white/60 p-5 dark:border-none dark:bg-slate-700/45">
      <nav>
        <Link className="flex w-full rounded-md px-3 py-2 hover:bg-slate-600/5 dark:hover:bg-white/5" to="/">
          <HomeIcon className="mr-2 size-6" />
          <span className="truncate">Home</span>
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
