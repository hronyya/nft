'use client';

import { useTranslation } from 'react-i18next';

import { CardMono } from './Card';
import BlurCircle from './BlurCircle';
import Button from './Button';
import Ticker from './Ticker';

import { CARD_MONO_DATA } from '@/data/constantCards';
import { GRADIENTS_BLUR } from '@/data/constantBlur';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div
      className="relative md:mb-[100px]"
      style={{
        width: 'calc(100vw-16px)',
      }}
    >
      {CARD_MONO_DATA.map((card, i) => (
        <CardMono
          key={i}
          imgSrc={card.imgSrc}
          name={card.name}
          minted={card.minted}
          mints={card.mints}
          startDate={card.startDate}
          endDate={card.endDate}
          className={card.className}
          transformOrigin={card.transformOrigin}
        />
      ))}

      <div className="z-10 mb-[100px] flex flex-col items-center text-white md:mb-[260px]">
        <h1 className="mb-[12px] w-8/12 text-center text-4xl+ font-semibold leading-[48px] tracking-tight sm:w-8/12 sm:text-3xl md:w-full lg:text-5xl xl:text-5xl+ 2xl:text-7xl">
          {t('heroH1')}
        </h1>
        <h4 className="mb-[40px] text-[32px] font-semibold tracking-tight text-backtext sm:mb-[80px] md:text-lg lg:text-4xl+ xl:text-5xl 2xl:text-6xl">
          {t('heroP')}
        </h4>
        <Button text={t('buttonText')} width="hero" />
      </div>
      <Ticker />
      {GRADIENTS_BLUR.map((item, i) => (
        <BlurCircle
          key={i}
          gradientColor={item.color}
          position={item.position}
        />
      ))}
    </div>
  );
}
