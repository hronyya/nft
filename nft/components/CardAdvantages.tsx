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
    <div className="relative h-[500px] w-[350px] sm:w-[427px] overflow-hidden rounded-[30px] bg-backcard px-5 pt-5 lg:h-[500px] xl:h-[600px]">
      <h5 className="mb-1 text-2xl font-semibold text-white  sm:text-xl lg:text-2xl+">
        {title}
      </h5>
      <p className="text-lg font-normal text-backtext md:text-sm lg:text-xl">
        {text}
      </p>
      <div className="absolute -top-24 sm:-top-24 left-1/2 -translate-x-1/2 translate-y-1/2 lg:-top-20 xl:top-0">
        {children}
      </div>
    </div>
  );
}
