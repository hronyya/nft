'use client';

import Image from 'next/image';

import Button from './Button';
import imgPhone1 from '@/public/phoneBanner_1.png';
import imgPhone2 from '@/public/phoneBanner_2.png';
import imgPhone3 from '@/public/phoneBanner_3.png';
import imgPhone4 from '@/public/phoneBanner_4.png';
import BlurCircle from './BigBlurCircle';
import { useTranslation } from 'react-i18next';

export default function Banner() {
  const { t } = useTranslation();
  return (
    <div className="relative mx-auto mb-60 flex h-[318px] w-[1320px] flex-col items-center justify-center gap-16 overflow-hidden rounded-[30px] bg-backbanner text-center leading-tight text-white">
      <div className="absolute left-10 top-0">
        <BlurCircle />
      </div>
      <Image
        src={imgPhone1}
        width={170}
        height={348}
        alt="imgPhone1"
        className="absolute -bottom-28 left-24 z-10 rotate-[-10deg] rounded-3xl border-2 bg-black p-1 shadow-2xl shadow-black"
      />
      <Image
        src={imgPhone2}
        width={170}
        height={348}
        alt="imgPhone1"
        className="absolute left-48 top-20 z-0 rotate-[8deg] rounded-3xl border-2 bg-black p-1 shadow-2xl shadow-black"
      />
      <h2 className="w-[534px] text-[40px] font-semibold">{t('bannerH2')}</h2>
      <Button text={t('buttonText')} />

      <div className="absolute bottom-1/2 right-1/2 scale-150">
        <BlurCircle />
      </div>

      <Image
        src={imgPhone3}
        width={170}
        height={348}
        alt="imgPhone1"
        className="absolute right-48 top-20 z-0 rotate-[-8deg] rounded-3xl border-2 bg-black p-1 shadow-2xl shadow-black"
      />
      <Image
        src={imgPhone4}
        width={170}
        height={348}
        alt="imgPhone1"
        className="absolute right-24 top-8 z-10 rotate-[10deg] rounded-3xl border-2 bg-black p-1 shadow-2xl shadow-black"
      />

      <div className="absolute bottom-24 right-10">
        <BlurCircle />
      </div>
    </div>
  );
}
