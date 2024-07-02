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
      <div className="absolute -right-72 z-20 w-[22.5%] rotate-12">
        <Card
          imgSrc={imgMonke}
          name="Monke"
          minted={[596, 999]}
          mints={127}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
      <div className="absolute -left-64 -top-20 w-[22.5%] -rotate-6">
        <Card
          imgSrc={imgTon}
          name="TON Collection"
          minted={[596, 999]}
          mints={127}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
      <div className="absolute -right-52 -top-24 w-[22.5%] -rotate-3">
        <Card
          imgSrc={imgHearts}
          name="[ MiLK Collection ]"
          minted={[596, 999]}
          mints={127}
          startDate={startDate}
          endDate={endDate}
        />
      </div>

      <div className="mb-52 flex flex-col items-center text-white">
        <h1 className="mb-[12px] text-7xl font-semibold tracking-tight">
          {t('heroH1')}
        </h1>
        <h4 className="mb-[80px] text-6xl font-semibold tracking-tight text-backtext">
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
