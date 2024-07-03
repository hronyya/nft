import { ReactNode } from 'react';

export default function MiniMonitor({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[27.2px] w-44 items-center justify-center gap-[3.4px] whitespace-nowrap rounded-full bg-white/10 px-1 text-[10px] 2xl:w-3/4 2xl:text-xs">
      {children}
    </div>
  );
}
