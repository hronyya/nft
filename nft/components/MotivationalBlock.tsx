'use client';

import { useTranslation } from 'react-i18next';

import BlurBack from './BlurBack';
import StarSVG from './icons/StarSVG';

export default function MotivationalBlock() {
  const { t } = useTranslation();
  return (
    <div className="relative mx-auto my-80 flex w-1/3 flex-col text-center">
      <div className="absolute -left-44 rotate-[20deg] scale-100">
        <StarSVG />
      </div>
      <div className="absolute -left-64 top-10 rotate-[30deg] scale-150">
        <StarSVG />
      </div>
      <div className="absolute -left-44 top-28 -rotate-[20deg] scale-125">
        <StarSVG />
      </div>

      <h2 className="mb-40px text-4xl+ font-semibold leading-[48px] text-white">
        {t('motivationH2')}
      </h2>
      <p className="text-xl font-normal leading-[30px] text-backtext">
        {t('motivationP')}
      </p>

      <div className="absolute -right-44 rotate-[20deg] scale-100">
        <StarSVG />
      </div>
      <div className="absolute -right-64 top-10 rotate-[30deg] scale-150">
        <StarSVG />
      </div>
      <div className="absolute -right-44 top-28 -rotate-[20deg] scale-125">
        <StarSVG />
      </div>
      <div className="absolute -left-80 -top-20">
        <BlurBack />
      </div>
    </div>
  );
}
