'use client';

import Card from './Card';
import imgMonke from '@/public/058810892b364fd6879fe1a6054a3978.png';
import imgHearts from '@/public/Frame 2das.png';
import imgTon from '@/public/db8111ee49dd72a2787c77f13639eb62.png';
import BlurCircle from './BlurCircle';
import Button from './Button';
import { useTranslation } from 'react-i18next';
import Ticker from './Ticker';

export default function Hero() {
  const startDate = new Date('2024-06-25T00:00:00');
  const endDate = new Date('2024-06-26T07:11:00');

  const { t } = useTranslation();
  return (
    <div className={`relative`}>
      <div className="absolute -right-40 -top-32 w-[60%] rotate-12 sm:-right-40 sm:w-[50%] md:-right-52 md:w-[40%] lg:-right-52 lg:w-[30%] xl:-right-60 xl:w-[24%] 2xl:-right-72 2xl:w-[22.5%]">
        <Card
          imgSrc={imgMonke}
          name="Monke"
          minted={[596, 999]}
          mints={127}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
      <div className="absolute -left-36 -top-40 -z-20 w-[60%] -rotate-6 sm:-left-40 sm:-top-32 sm:w-[60$] md:-left-40 md:-top-36 md:w-[40%] lg:-left-52 lg:w-[30%] xl:-left-60 xl:w-[26%] 2xl:-left-64 2xl:w-[22.5%]">
        <Card
          imgSrc={imgTon}
          name="TON Collection"
          minted={[596, 999]}
          mints={127}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
      <div className="absolute -right-28 -top-44 -z-20 w-[60%] -rotate-3 sm:-right-32 sm:w-[50%] md:-right-36 md:w-[38%] lg:-right-40 lg:-top-24 lg:w-[30%] xl:-right-44 xl:w-[26%] 2xl:-right-52 2xl:w-[22.5%]">
        <Card
          imgSrc={imgHearts}
          name="[ MiLK Collection ]"
          minted={[596, 999]}
          mints={127}
          startDate={startDate}
          endDate={endDate}
        />
      </div>

      <div className="z-10 mb-52 flex flex-col items-center text-white">
        <h1 className="xl:text-5xl+ mb-[12px] w-1/2 text-center text-2xl+ font-semibold tracking-tight md:w-full md:text-3xl lg:text-5xl 2xl:text-7xl">
          {t('heroH1')}
        </h1>
        <h4 className="mb-[80px] text-base font-semibold tracking-tight text-backtext md:text-lg lg:text-4xl+ xl:text-5xl 2xl:text-6xl">
          {t('heroP')}
        </h4>
        <Button text={t('buttonText')} />
      </div>
      <Ticker />
      <div className="absolute -left-40 -top-10">
        <BlurCircle />
      </div>
      <div className="absolute -left-5 top-60 -z-10">
        <BlurCircle />
      </div>
      <div className="absolute -right-20 -top-10 -z-10">
        <BlurCircle />
      </div>
      <div className="absolute -right-32 top-64">
        <BlurCircle />
      </div>
      <div className="absolute right-20 top-32">
        <BlurCircle />
      </div>
    </div>
  );
}
