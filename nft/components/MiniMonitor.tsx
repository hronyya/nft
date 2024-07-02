import { ReactNode } from 'react';

export default function MiniMonitor({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[27.2px] w-[133.39px] items-center justify-center gap-[3.4px] rounded-full bg-white/10 text-xs">
      {children}
    </div>
  );
}
