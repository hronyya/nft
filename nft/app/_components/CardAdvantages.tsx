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
    <div className="bg-backcard relative h-[600px] w-[427px] overflow-hidden rounded-[30px]">
      <h5 className="px-5 pb-1 pt-5 text-[28px] font-semibold text-white">
        {title}
      </h5>
      <p className="px-5 text-[20px] font-normal text-backtext">{text}</p>
      <div className="absolute left-1/2 top-0 -translate-x-1/2 translate-y-1/2">
        {children}
      </div>
    </div>
  );
}
