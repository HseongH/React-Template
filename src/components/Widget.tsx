import { ReactNode } from 'react';

interface IWidget {
  children: ReactNode;
}

function Widget({ children }: IWidget) {
  return (
    <div className="rounded-md border border-slate-200 bg-white/60 p-5 dark:border-none dark:bg-slate-700/45">
      {children}
    </div>
  );
}

export default Widget;
