'use client';

import Card from './Card';
import imgMonke from '@/public/058810892b364fd6879fe1a6054a3978.png';
import imgHearts from '@/public/Frame 2das.png';
import imgTon from '@/public/db8111ee49dd72a2787c77f13639eb62.png';
import BlurCircle from './BlurCircle';
import Button from './Button';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const startDate = new Date('2024-06-25T00:00:00');
  const endDate = new Date('2024-06-26T07:11:00');

  const { t } = useTranslation();

  return (
    <div className="relative mb-40">
      <div className="absolute -right-10 z-20 rotate-12">
        <Card
          imgSrc={imgMonke}
          name="Monke"
          minted={[596, 999]}
          mints={127}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
      <div className="absolute -top-20 -rotate-6">
        <Card
          imgSrc={imgTon}
          name="TON Collection"
          minted={[596, 999]}
          mints={127}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
      <div className="absolute -top-24 right-14 -rotate-3">
        <Card
          imgSrc={imgHearts}
          name="[ MiLK Collection ]"
          minted={[596, 999]}
          mints={127}
          startDate={startDate}
          endDate={endDate}
        />
      </div>

      <div className="mt-[260px] flex w-screen flex-col items-center justify-center text-white">
        <h1 className="mb-[12px] text-7xl tracking-tighter">{t('heroH1')}</h1>
        <h4 className="mb-[80px] text-6xl text-backtext">{t('heroP')}</h4>
        <Button text={t('buttonText')} />
      </div>
      <div className="absolute left-20 top-0">
        <BlurCircle color="blue-500" radius={223} />
      </div>
      <div className="absolute left-48 top-60 -z-10">
        <BlurCircle color="blue-500" radius={223} />
      </div>
      <div className="absolute -top-10 right-0 -z-10">
        <BlurCircle color="blue-500" radius={223} />
      </div>
      <div className="absolute right-20 top-64">
        <BlurCircle color="blue-500" radius={223} />
      </div>
      <div className="absolute right-64 top-32">
        <BlurCircle color="blue-500" radius={223} />
      </div>
    </div>
  );
}
