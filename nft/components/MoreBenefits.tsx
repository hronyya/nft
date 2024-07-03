'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import parseCollectionFeatures from '@/utils/Formater';
import MoreBenefitsInfo from './MoreBenefitsInfo';
import gif1 from '@/public/gifForPhone1.gif';
import gif2 from '@/public/gifForPhone2.gif';
import clsx from 'clsx';

export default function MoreBenefits({ positionGif }: { positionGif: 1 | 2 }) {
  const { t } = useTranslation();

  return (
    <div className="mx-auto mb-52 flex h-screen w-full scale-[0.6] items-center gap-32 lg:w-10/12 lg:scale-75 xl:scale-[0.8] 2xl:scale-100">
      <div
        className={clsx(
          'relative h-5/6 w-80 rounded-[52px] border-2 bg-black',
          {
            'order-0': positionGif === 1,
            'order-2': positionGif === 2,
          },
        )}
      >
        <Image
          src={positionGif === 1 ? gif1 : gif2}
          fill
          className="rounded-[52px] p-6"
          alt="phone"
        />
      </div>

      <MoreBenefitsInfo
        title={t(`benefitsTitle${positionGif}`)}
        listAdvantages={parseCollectionFeatures(
          t(`benefitsValue${positionGif}`),
        )}
      />
    </div>
  );
}
