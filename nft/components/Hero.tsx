'use client';

import Card from './Card';
import imgMonke from '@/public/058810892b364fd6879fe1a6054a3978.png';
import imgHearts from '@/public/fafaffa.png';
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
    <div
      className="relative"
      style={{
        width: 'calc(100vw-16px)',
        margin: '0 -50vw',
      }}
    >
      <div className="absolute -right-20 top-[-45%] -z-10 rotate-12 sm:right-[-10%] sm:top-[-22%] md:right-[-5%] lg:right-[-5%] xl:right-[-5%] xl:w-[24%] 2xl:right-[-3%]">
        <Card
          img={imgMonke}
          name="Monke"
          minted={[596, 999]}
          mints={127}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
      <div>
        <div className="absolute -top-72 right-[-3%] -z-20 -rotate-3 sm:-top-44 sm:right-[-8%] md:right-[0%] lg:right-[0%] lg:top-[-35%] xl:right-[2%] 2xl:right-[10%]">
          <Card
            img={imgHearts}
            name="[ MiLK Collection ]"
            minted={[596, 999]}
            mints={127}
            startDate={startDate}
            endDate={endDate}
          />
        </div>

        <div className="absolute left-[-8%] top-[-57%] -z-20 -rotate-6 sm:left-[-10%] sm:top-[-22%] md:-top-36 md:left-[-5%] md:w-[40%] lg:left-[-2%] xl:left-[2%] 2xl:left-[6%]">
          <Card
            img={imgTon}
            name="TON Collection"
            minted={[596, 999]}
            mints={127}
            startDate={startDate}
            endDate={endDate}
          />
        </div>
      </div>

      <div className="z-10 mb-52 flex flex-col items-center text-white">
        <h1 className="mb-[12px] w-7/12 text-center text-4xl+ font-semibold leading-[48px] tracking-tight sm:w-8/12 sm:text-3xl md:w-full lg:text-5xl xl:text-5xl+ 2xl:text-7xl">
          {t('heroH1')}
        </h1>
        <h4 className="mb-[40px] text-[32px] font-semibold tracking-tight text-backtext sm:mb-[80px] md:text-lg lg:text-4xl+ xl:text-5xl 2xl:text-6xl">
          {t('heroP')}
        </h4>
        <Button text={t('buttonText')} width="hero" />
      </div>
      <Ticker />
      <div className="absolute left-[-20%] top-[-60%] -z-30 sm:left-[-20%] sm:top-[-30%] md:left-[-10%] md:top-[-30%] lg:left-[-3%] lg:top-[-32%] xl:left-[1%] xl:top-[-40%]">
        <BlurCircle number="one" />
      </div>
      <div className="absolute left-[-2%] top-[-38%] -z-30 -rotate-12 scale-y-50 sm:left-[-8%] sm:top-[-8%] sm:rotate-0 sm:scale-y-100 md:left-[0%] md:top-[-10%] lg:left-[2%] lg:top-[-10%] xl:left-[10%] xl:top-[12%]">
        <BlurCircle number="two" />
      </div>
      <div className="absolute right-[5%] top-[-30%] -z-10 rotate-[15deg] scale-y-50 sm:right-[-10%] sm:top-[-5%] sm:rotate-0 sm:scale-y-100">
        <BlurCircle number="three" />
      </div>
      <div className="absolute right-[-10%] top-[-25%] -z-30 sm:right-[0%] sm:top-[-14%] md:right-[-5%] md:top-0 lg:right-[-1%] lg:top-[-2%] xl:right-[5%] xl:top-[22%]">
        <BlurCircle number="four" />
      </div>
      <div className="absolute right-[-5%] top-[-50%] -z-30 sm:right-[-10%] sm:top-[-35%] md:right-[0%] lg:right-[5%]">
        <BlurCircle number="five" />
      </div>
    </div>
  );
}
