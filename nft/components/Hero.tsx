'use client';

import { useTranslation } from 'react-i18next';

import { CardMono } from './Card';
import BlurCircle from './BlurCircle';
import Button from './Button';
import Ticker from './Ticker';
import imgMonke from '@/public/monkeImg.png';
import imgMilk from '@/public/milkImg.png';
import imgTon from '@/public/tonImg.png';

const GRADIENTS_BLUR = [
  {
    color:
      'radial-gradient(circle at center, rgba(4, 124, 174, 0.2), rgba(0, 0, 0, 0) 135px)',
    position:
      'absolute left-[-20%] top-[-60%] -z-30 sm:left-[-20%] sm:top-[-30%] md:left-[-10%] md:top-[-30%] lg:left-[-3%] lg:top-[-32%] xl:left-[1%] xl:top-[-40%]',
  },
  {
    color:
      'radial-gradient(circle at center, rgba(34, 154, 204, 0.25), rgba(0, 0, 0, 0) 158px)',
    position:
      'absolute left-[-5%] top-[-40%] -z-30 -rotate-12 scale-y-50 sm:left-[-8%] sm:top-[-8%] sm:rotate-0 sm:scale-y-100 md:left-[0%] md:top-[-10%] lg:left-[2%] lg:top-[-10%] xl:left-[10%] xl:top-[12%]',
  },
  {
    color:
      'radial-gradient(circle at center, rgba(61, 117, 255, 0.2), rgba(0, 0, 0, 0) 110px)',
    position:
      'absolute right-[5%] top-[-30%] -z-10 rotate-[15deg] scale-y-50 sm:right-[-10%] sm:top-[-5%] sm:rotate-0 sm:scale-y-100',
  },
  {
    color:
      'radial-gradient(circle at center, rgba(115, 157, 221, 0.2), rgba(0, 0, 0, 0) 127px)',
    position:
      'absolute right-[-10%] top-[-25%] -z-30 sm:right-[0%] sm:top-[-14%] md:right-[-5%] md:top-0 lg:right-[-1%] lg:top-[-2%] xl:right-[5%] xl:top-[22%]',
  },
  {
    color:
      'radial-gradient(circle at center, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0) 126px)',
    position:
      'absolute right-[-5%] top-[-50%] -z-30 sm:right-[-10%] sm:top-[-35%] md:right-[0%] lg:right-[5%]',
  },
];

const CARD_MONO_DATA = [
  {
    imgSrc: imgMonke.src,
    name: 'Monke',
    minted: [596, 999],
    mints: 127,
    startDate: new Date('2024-06-25T00:00:00'),
    endDate: new Date('2024-06-26T07:11:00'),
    className:
      'absolute minism:right-[-20%] right-[-25%] top-[-50%] -z-10 rotate-12 sm:right-[-4%] sm:top-[-20%] xl:top-[-10%] md:right-[0%] lg:right-[0%] xl:right-[3%] xl:w-[319px] 2xl:right-[5%]',
    transformOrigin: 'center center',
  },
  {
    imgSrc: imgMilk.src,
    name: '[ MiLK Collection ]',
    minted: [596, 999],
    mints: 127,
    startDate: new Date('2024-06-25T00:00:00'),
    endDate: new Date('2024-06-26T07:11:00'),
    className:
      'absolute top-[-59.5%] right-[-12.5%] -z-20 -rotate-3 sm:-top-44 sm:right-[0%] md:top-[-30%] md:right-[4%] lg:right-[4%] lg:top-[-30%] xl:right-[10%] 2xl:right-[10.5%]',
    transformOrigin: 'center center',
  },
  {
    imgSrc: imgTon.src,
    name: 'TON Collection',
    minted: [596, 999],
    mints: 127,
    startDate: new Date('2024-06-25T00:00:00'),
    endDate: new Date('2024-06-26T07:11:00'),
    className:
      'absolute left-[-17%] top-[-64%] -z-20 -rotate-6 sm:left-[0%] sm:top-[-35%] md:-top-36 md:left-[0%] md:w-[40%] lg:left-[4%] xl:left-[6%] 2xl:left-[6%]',
    transformOrigin: 'center center',
  },
];

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
        <h1 className="minism:w-8/12 minism:text-4xl+ mb-[12px] w-10/12 text-center text-[32px] font-semibold leading-[48px] tracking-tight sm:w-8/12 sm:text-3xl md:w-full lg:text-5xl xl:text-5xl+ 2xl:text-7xl">
          {t('heroH1')}
        </h1>
        <h4 className="mb-[40px] text-[22px] font-semibold tracking-tight text-backtext sm:mb-[80px] md:text-lg lg:text-4xl+ xl:text-5xl 2xl:text-6xl">
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
