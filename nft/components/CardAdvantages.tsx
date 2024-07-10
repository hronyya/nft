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
    <div className="relative h-[500px] w-[350px] overflow-hidden rounded-[30px] bg-backcard p-5 sm:w-[427px] md:p-7 lg:h-[500px] xl:h-[600px]">
      <h5 className="mb-5 text-2xl font-semibold text-white sm:text-xl md:text-left lg:text-2xl+">
        {title}
      </h5>
      <p className="text-lg font-normal text-backtext md:text-sm lg:text-xl">
        {text}
      </p>
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 translate-y-1/2 sm:-top-24 lg:-top-20 xl:top-0">
        {children}
      </div>
    </div>
  );
}
