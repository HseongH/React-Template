import { ReactNode } from 'react';

interface IBox {
  children: ReactNode;
}

function Box({ children }: IBox) {
  return (
    <div className="rounded-md border border-slate-200 bg-white/60 p-5 dark:border-none dark:bg-slate-700/45">
      {children}
    </div>
  );
}

export default Box;
