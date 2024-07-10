'use client';

import { useTranslation } from 'react-i18next';

import BlurBack from './BlurBack';
import StarImg from '@/public/Star.png';

export default function MotivationalBlock() {
  const { t } = useTranslation();
  return (
    <div className="relative mb-0 flex w-[50%] flex-col items-center gap-10 py-14 text-center md:mb-[100px]">
      <div
        style={{
          backgroundImage: `url(${StarImg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute left-[-40%] top-[-30%] size-[55px] -rotate-12 sm:left-[-20%] sm:rotate-0 lg:left-[-2%]"
      />
      <div
        style={{
          backgroundImage: `url(${StarImg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute left-[-100%] top-[30%] size-[75px] rotate-6 sm:left-[-40%] lg:left-[-12%]"
      />
      <div
        style={{
          backgroundImage: `url(${StarImg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute left-[-60%] top-[100%] size-[65px] rotate-12 sm:left-[-30%] sm:top-[60%] sm:-rotate-[25deg] lg:left-[-4%]"
      />
      <div className="z-20 flex w-[350px] flex-col items-center gap-10 sm:w-[390px] lg:w-9/12">
        <h2 className="w-11/12 text-3xl font-semibold leading-none text-white lg:w-[80%] lg:leading-8 xl:text-3xl xl:leading-[48px] 2xl:text-4xl">
          {t('motivationH2')}
        </h2>
        <p className="w-full text-lg font-normal text-backtext sm:w-full md:text-sm lg:w-[80%] xl:text-base 2xl:text-xl">
          {t('motivationP')}
        </p>
      </div>

      <div
        style={{
          backgroundImage: `url(${StarImg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute right-[-60%] top-[-25%] size-[50px] rotate-6 sm:right-[-30%] sm:top-[0%] sm:size-[70px] sm:-rotate-12 lg:right-[-2%]"
      />
      <div
        style={{
          backgroundImage: `url(${StarImg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute right-[-100%] top-[30%] size-[50px] rotate-6 sm:right-[-40%] lg:right-[-12%]"
      />
      <div
        style={{
          backgroundImage: `url(${StarImg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute right-[-58%] top-[90%] size-[65px] -rotate-12 sm:right-[-30%] sm:top-[60%] sm:rotate-[25deg] lg:right-[-4%]"
      />
      <div className="absolute -top-52 left-[-60%] rotate-90 sm:-top-52 sm:rotate-0">
        <BlurBack />
      </div>
    </div>
  );
}
