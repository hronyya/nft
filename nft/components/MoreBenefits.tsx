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
    <div className="mx-auto pb-10 sm:mb-52  h-[1300px] flex flex-col sm:flex-row sm:h-screen w-11/12 scale-[1]
     items-center gap-10 md:gap-32 lg:w-10/12 lg:scale-75 xl:scale-[0.8] 2xl:scale-100">
      <div
        className={clsx(
          'relative flex object-center sm:h-[500px] md:h-[600px] w-10/12 h-[700px] sm:w-96  rounded-[52px] border-[1px]  sm:border-2 bg-black', 
          {
            'order-0': positionGif === 1,
            'order-2': positionGif === 2,
          },
        )}
      >
        <Image
          src={positionGif === 1 ? gif1 : gif2}
          fill
          className="rounded-[52px] p-2 lg:p-6 h-[600px]"
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
