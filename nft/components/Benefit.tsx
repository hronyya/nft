'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import parseCollectionFeatures from '@/utils/Formater';
import MoreBenefitsInfo from './MoreBenefitsInfo';

import clsx from 'clsx';

export default function Benefit({ data }: { data: any }) {
  const { gifPosition, gifSrc, id } = data;
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center gap-[40px] md:flex-row md:gap-[120px]">
      <div
        className={clsx(
          'relative flex h-[620px] w-[304px] rounded-[52px] border-[1px] bg-black object-center',
          {
            'order-2 md:order-[0]': gifPosition,
            'order-2 md:order-2': !gifPosition,
          },
        )}
      >
        <Image
          src={gifSrc}
          fill
          className="h-[600px] rounded-[52px] p-2 lg:p-6"
          alt="phone"
        />
      </div>

      <MoreBenefitsInfo
        title={t(`benefitsTitle${id + 1}`)}
        listAdvantages={parseCollectionFeatures(t(`benefitsValue${id + 1}`))}
      />
    </div>
  );
}
