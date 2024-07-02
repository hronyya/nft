'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import ProfileSVG from './icons/ProfileSVG';
import LightningSVG from './icons/LightningSVG';
import CardAdvantages from './CardAdvantages';
import MessageBlock from './MessageBlock';
import phone1Src from '@/public/phone1.png';
import phone1_1Src from '@/public/phone1_1.png';
import phone1_2Src from '@/public/phone1_2.png';
import phone2_1Src from '@/public/phone2_1.png';
import phone2_2Src from '@/public/phone2_2.png';
import phone3Src from '@/public/phone3.png';

export default function OurAdvantages() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto mb-52 w-5/6">
      <h3 className="pb-20 text-center text-4xl+ font-semibold text-white">
        {t('advantagesH3')}
      </h3>
      <div className="flex gap-5">
        <CardAdvantages
          title={t('advantagesTitle1')}
          text={t('advantagesValue1')}
        >
          <Image
            className="absolute -right-16 top-20 z-20 rotate-12 rounded-full shadow-lg shadow-cyan-400/20"
            src={phone1_1Src}
            width={54}
            height={54}
            alt="phone1"
          ></Image>
          <Image
            className="absolute -left-10 bottom-52 z-20 rotate-[-13.48deg] rounded-full shadow-2xl shadow-cyan-400/80"
            src={phone1_2Src}
            width={54}
            height={54}
            alt="phone1"
          ></Image>

          <div className="relative h-[470px] w-[228px]">
            <Image src={phone1Src} fill alt="phone1"></Image>
          </div>
        </CardAdvantages>
        <CardAdvantages
          title={t('advantagesTitle2')}
          text={t('advantagesValue2')}
        >
          <div className="relative h-[470px] w-[228px]">
            <Image
              src={phone2_1Src}
              alt="phone2_1"
              className="absolute -right-16 top-14 -z-10 rotate-[8deg] rounded-[30px] border-2"
            />
            <Image
              src={phone2_2Src}
              alt="phone2_2"
              className="absolute right-0 top-0 z-10 rotate-[-10deg] rounded-[30px] border-2"
            />
          </div>
        </CardAdvantages>
        <CardAdvantages
          title={t('advantagesTitle3')}
          text={t('advantagesValue3')}
        >
          <div className="relative h-[470px] w-[228px]">
            <Image
              src={phone3Src}
              alt="phone3"
              className="absolute -right-20 top-10 -z-10 rotate-[5.5deg] rounded-[30px] border-2"
            />
            <div className="absolute -left-16 top-5 rotate-[-5deg]">
              <MessageBlock mainText="Invited friend" secondText="+200 Points">
                <ProfileSVG />
              </MessageBlock>
            </div>
            <div className="absolute left-[-5rem] top-24 rotate-[-1deg]">
              <MessageBlock mainText="Friend’s mint" secondText="+100 Points">
                <LightningSVG />
              </MessageBlock>
            </div>
            <div className="absolute left-[-5.5rem] top-44 rotate-[2deg]">
              <MessageBlock mainText="Friend’s mint" secondText="+100 Points">
                <LightningSVG />
              </MessageBlock>
            </div>
            <div className="absolute left-[-4.5rem] top-64 rotate-[-3deg]">
              <MessageBlock mainText="Invited friend" secondText="+200 Points">
                <ProfileSVG />
              </MessageBlock>
            </div>
          </div>
        </CardAdvantages>
      </div>
    </div>
  );
}
