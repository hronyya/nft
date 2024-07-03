'use client';

import { useTranslation } from 'react-i18next';

import BlurBack from './BlurBack';
import StarSVG from './icons/StarSVG';

export default function MotivationalBlock() {
  const { t } = useTranslation();
  return (
    <div className="relative mx-auto my-80 flex w-[50%] flex-col items-center gap-10 text-center">
      <div className="absolute -right-28 -top-10 rotate-[20deg] scale-100 md:-left-44 md:top-0">
        <StarSVG />
      </div>
      <div className="absolute -left-64 top-10 rotate-[30deg] scale-150">
        <StarSVG />
      </div>
      <div className="absolute -right-20 top-28 -rotate-[20deg] scale-125 md:-left-44 md:top-28">
        <StarSVG />
      </div>

      <h2 className="mb-40px w-80 text-2xl font-semibold leading-none text-white lg:w-[80%] lg:leading-8 xl:text-3xl xl:leading-[48px] 2xl:text-4xl">
        {t('motivationH2')}
      </h2>
      <p className="w-80 text-xs font-normal text-backtext sm:w-full md:text-sm lg:w-[80%] xl:text-base 2xl:text-xl">
        {t('motivationP')}
      </p>

      <div className="absolute -top-20 right-52 rotate-[20deg] scale-100 md:-right-40">
        <StarSVG />
      </div>
      <div className="absolute -right-64 top-10 rotate-[30deg] scale-150">
        <StarSVG />
      </div>
      <div className="absolute right-52 top-40 -rotate-[20deg] scale-125 md:-right-44">
        <StarSVG />
      </div>
      <div className="absolute -left-80 -top-20">
        <BlurBack />
      </div>
    </div>
  );
}
