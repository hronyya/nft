import { ReactNode } from 'react';

export default function CardAdvantages({
  title,
  text,
  children,
}: {
  title: string;
  text: string;
  children: ReactNode;
}) {
  return (
    <div className="relative h-[600px] w-[427px] overflow-hidden rounded-[30px] bg-backcard px-5 pt-5">
      <h5 className="mb-1 text-2xl+ font-semibold text-white">{title}</h5>
      <p className="text-xl font-normal text-backtext">{text}</p>
      <div className="absolute left-1/2 top-0 -translate-x-1/2 translate-y-1/2">
        {children}
      </div>
    </div>
  );
}
