import { ReactNode } from 'react';

export default function MessageBlock({
  mainText,
  secondText,
  children,
}: {
  mainText: string;
  secondText: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-backmessage/80 z-20 flex h-[58px] w-[228px] items-center gap-2 rounded-[11px]">
      <div className="ml-4">{children}</div>
      <div>
        <p className="text-white">{mainText}</p>
        <p className="text-backtext">{secondText}</p>
      </div>
    </div>
  );
}
