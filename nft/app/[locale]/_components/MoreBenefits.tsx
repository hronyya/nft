'use client';

import Image from 'next/image';
import gif from '@/public/gifForPhone.gif';
import MoreBenefitsInfo from './MoreBenefitsInfo';
import { useTranslation } from 'react-i18next';
import parseCollectionFeatures from '../_utils/Formater';

export default function MoreBenefits({ positionGif }: { positionGif: 1 | 2 }) {
  const { t } = useTranslation();

  return (
    <div className="mx-auto mb-52 flex w-[910px] items-center gap-32">
      <div
        className={`relative order-${positionGif === 1 ? 1 : 2} h-[674px] w-80 rounded-[52px] border-2 bg-black`}
      >
        <Image src={gif} fill className="rounded-[52px] p-6" alt="phone" />
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
