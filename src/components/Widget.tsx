import { ReactNode } from 'react';

interface IWidget {
  children: ReactNode;
}

function Widget({ children }: IWidget) {
  return <div className="rounded-md bg-slate-600/5 p-5 dark:bg-slate-900/30">{children}</div>;
}

export default Widget;
