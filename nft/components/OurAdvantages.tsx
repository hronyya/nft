'use client';

import { useTranslation } from 'react-i18next';

import CardAdvantages from './CardAdvantages';
import MessageBlock from './MessageBlock';
import phone1 from '@/public/phone1.png';
import phone1_1 from '@/public/phone1_1.png';
import phone1_2 from '@/public/phone1_2.png';
import phone2_1 from '@/public/phone2_1.png';
import phone2_2 from '@/public/phone2_2.png';
import phone3 from '@/public/phone3.png';
import profileIcon from '@/public/profileIcon.png';
import lightningIcon from '@/public/lightningIcon.png';
import Image from 'next/image';

export default function OurAdvantages() {
  const { t } = useTranslation();

  return (
    <div className="">
      <h3 className="pb-10 text-center text-3xl font-semibold text-white sm:pb-20 sm:text-4xl+">
        {t('advantagesH3')}
      </h3>
      <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
        <CardAdvantages
          title={t('advantagesTitle1')}
          text={t('advantagesValue1')}
        >
          <div className="scale-[0.8] sm:scale-[0.8] 2xl:scale-100">
            <div
              style={{
                backgroundImage: `url(${phone1_1.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="absolute -right-16 top-20 z-20 size-[54px] rotate-12 rounded-full shadow-lg shadow-cyan-400/20"
            />
            <div
              style={{
                backgroundImage: `url(${phone1_2.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="absolute -left-10 bottom-52 z-20 size-[54px] rotate-[-13.48deg] rounded-full shadow-2xl shadow-cyan-400/80"
            />

            <div
              className="relative h-[470px] w-[228px] rounded-[30px] border-[1px]"
              style={{
                backgroundImage: `url(${phone1.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        </CardAdvantages>
        <CardAdvantages
          title={t('advantagesTitle2')}
          text={t('advantagesValue2')}
        >
          <div className="relative h-[470px] w-[228px] scale-[0.8] sm:scale-[0.8] 2xl:scale-100">
            <div
              style={{
                backgroundImage: `url(${phone2_1.src})`,
                backgroundSize: 'cover',
              }}
              className="absolute -right-12 top-14 -z-10 h-[369px] w-[179px] rotate-[8deg] rounded-[30px] border-2 bg-black pt-12"
            />
            <div
              style={{
                backgroundImage: `url(${phone2_2.src})`,
                backgroundSize: 'cover',
              }}
              className="absolute left-[-15%] top-0 z-10 h-[433px] w-[211px] rotate-[-10deg] rounded-[30px] border-2"
            />
          </div>
        </CardAdvantages>
        <CardAdvantages
          title={t('advantagesTitle3')}
          text={t('advantagesValue3')}
        >
          <div className="relative h-[470px] w-[228px] scale-[0.8] sm:scale-[0.8] 2xl:scale-100">
            <div
              style={{
                backgroundImage: `url(${phone3.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="absolute -right-20 top-10 -z-10 h-[469px] w-[228px] rotate-[5.5deg] rounded-[30px] border-2"
            />
            <div className="absolute -left-16 top-5 rotate-[-5deg]">
              <MessageBlock mainText="Invited friend" secondText="+200 Points">
                <Image
                  src={profileIcon.src}
                  alt="profileIcon"
                  width={24}
                  height={24}
                />
              </MessageBlock>
            </div>
            <div className="absolute left-[-5rem] top-24 rotate-[-1deg]">
              <MessageBlock mainText="Friend’s mint" secondText="+100 Points">
                <Image
                  src={lightningIcon.src}
                  alt="lightningIcon"
                  width={24}
                  height={24}
                />
              </MessageBlock>
            </div>
            <div className="absolute left-[-5.5rem] top-44 rotate-[2deg]">
              <MessageBlock mainText="Friend’s mint" secondText="+100 Points">
                <Image
                  src={lightningIcon.src}
                  alt="lightningIcon"
                  width={24}
                  height={24}
                />
              </MessageBlock>
            </div>
            <div className="absolute left-[-4.5rem] top-64 rotate-[-3deg]">
              <MessageBlock mainText="Invited friend" secondText="+200 Points">
                <Image
                  src={profileIcon.src}
                  alt="profileIcon"
                  width={24}
                  height={24}
                />
              </MessageBlock>
            </div>
          </div>
        </CardAdvantages>
      </div>
    </div>
  );
}
