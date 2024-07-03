'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import Button from './Button';
import BlurCircle from './BigBlurCircle';
import imgPhone1 from '@/public/phoneBanner_1.png';
import imgPhone2 from '@/public/phoneBanner_2.png';
import imgPhone3 from '@/public/phoneBanner_3.png';
import imgPhone4 from '@/public/phoneBanner_4.png';

export default function Banner() {
  const { t } = useTranslation();
  return (
    <div className="relative mb-60 flex h-[520px] sm:h-[318px] flex-col items-center sm:justify-center gap-16 overflow-hidden rounded-[30px] bg-backbanner text-center leading-tight text-white">
      <div className="absolute left-10 top-0">
        <BlurCircle />
      </div>
      <Image
        src={imgPhone1}
        width={170}
        height={348}
        alt="imgPhone1"
        className="scale-100 sm:scale-75 absolute -bottom-60 sm:-bottom-40 md:-bottom-40 lg:-bottom-28 sm:-left-6  md:-left-4 lg:left-0 xl:left-14 2xl:left-24 z-10 rotate-[-10deg] rounded-3xl border-2 bg-black p-1 shadow-2xl shadow-black"
      />
      <Image
        src={imgPhone2}
        width={170}
        height={348}
        alt="imgPhone1"
        className="absolute scale-100 sm:scale-75 sm:-left-4 md:left-4 lg:left-16 xl:left-32 2xl:left-48 sm:top-16 lg:top-0 xl:top-10 hidden sm:block z-0 rotate-[8deg] rounded-3xl border-2 bg-black p-1 shadow-2xl shadow-black"
      />
      <h2 className="w-[534px] text-4xl+ font-semibold mt-20">{t('bannerH2')}</h2>
      <Button text={t('buttonText')} />

      <div className="absolute bottom-1/2 right-1/2 scale-150">
        <BlurCircle />
      </div>

      <Image
        src={imgPhone3}
        width={170}
        height={348}
        alt="imgPhone1"
        className="absolute hidden scale-100 sm:scale-75 sm:block sm:right-6 md:right-10 lg:right-20 xl:right-32 sm:top-32  lg:top-20 z-0 rotate-[-8deg] rounded-3xl border-2 bg-black p-1 shadow-2xl shadow-black"
      />
      <Image
        src={imgPhone4}
        width={170}
        height={348}
        alt="imgPhone1"
        className="absolute top-80 scale-100 sm:scale-75 sm:-right-6 md:-right-4 lg:right-0 xl:right-10 sm:top-20  lg:top-8 z-10 rotate-[10deg] rounded-3xl border-2 bg-black p-1 shadow-2xl shadow-black"
      />

      <div className="absolute bottom-24 right-10">
        <BlurCircle />
      </div>
    </div>
  );
}
