'use client';

import { useTranslation } from 'react-i18next';

import Button from './Button';
import BlurCircle from './BigBlurCircle';
import imgPhone1 from '@/public/phoneBanner_1.png';
import imgPhone2 from '@/public/phoneBanner_2.png';
import imgPhone3 from '@/public/phoneBanner_3.png';
import imgPhone4 from '@/public/phoneBanner_4.png';
import vectorPhone1 from '@/public/Vectorphone1.png';
import vectorPhone4 from '@/public/vectorPhone4.png';

export default function Banner() {
  const { t } = useTranslation();
  return (
    <div className="relative mb-10 flex h-[520px] w-[90%] flex-col items-center gap-16 overflow-hidden rounded-[30px] bg-backbanner text-center leading-tight text-white sm:mb-60 sm:w-[75%] sm:justify-center md:h-[318px] md:w-[98%] lg:w-[90%] 2xl:w-[1700px]">
      <div className="absolute left-10 top-0">
        <BlurCircle />
      </div>
      <div
        style={{
          backgroundImage: `url(${vectorPhone1.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className="absolute -bottom-40 left-[10%] z-10 h-[348px] w-[165px] rotate-[-10deg] scale-100 rounded-3xl shadow-2xl shadow-black sm:-bottom-32 sm:left-[20%] sm:scale-75 md:-bottom-40 md:-left-4 lg:-bottom-28 lg:left-0 xl:left-14 2xl:left-24"
      />
      <div
        style={{
          backgroundImage: `url(${imgPhone2.src})`,
          backgroundSize: 'cover',
        }}
        className="absolute z-0 hidden h-[348px] w-[170px] rotate-[8deg] scale-100 rounded-3xl border-2 bg-black p-1 shadow-2xl shadow-black sm:-left-4 sm:top-16 sm:scale-75 md:left-4 md:block lg:left-16 lg:top-0 xl:left-32 xl:top-10 2xl:left-48"
      />
      <div className="flex flex-col items-center gap-10 sm:gap-10 sm:pb-40 md:pb-0">
        <h2 className="mt-10 w-[320px] text-3xl font-semibold leading-[38px] sm:mt-0 sm:leading-[48px]">
          {t('bannerH2')}
        </h2>
        <Button text={t('buttonText')} width="banner" />
      </div>

      <div className="absolute bottom-1/2 right-1/2 scale-150">
        <BlurCircle />
      </div>

      <div
        style={{
          backgroundImage: `url(${imgPhone3.src})`,
          backgroundSize: 'cover',
        }}
        className="absolute z-0 hidden h-[348px] w-[170px] rotate-[-8deg] scale-100 rounded-3xl border-2 bg-black p-1 shadow-2xl shadow-black sm:right-6 sm:top-32 sm:scale-75 md:right-10 md:block lg:right-20 lg:top-20 xl:right-32"
      />
      <div
        style={{
          backgroundImage: `url(${vectorPhone4.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute right-[10%] top-72 z-10 h-[348px] w-[170px] rotate-[10deg] scale-100 rounded-3xl shadow-2xl shadow-black sm:right-[20%] sm:top-[50%] sm:scale-75 md:-right-4 md:top-20 lg:right-0 lg:top-8 xl:right-10"
      />

      <div className="absolute bottom-24 right-10">
        <BlurCircle />
      </div>
    </div>
  );
}
