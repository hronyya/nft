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
    <div className="mx-auto mb-52 flex w-4/6 items-center gap-32">
      <div
        className={clsx(
          'relative h-[674px] w-80 rounded-[52px] border-2 bg-black',
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
