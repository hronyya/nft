import Image from 'next/image';

import CardAdvantages from './CardAdvantages';
import phone1Src from '@/public/phone1.png';
import phone1_1Src from '@/public/phone1_1.png';
import phone1_2Src from '@/public/phone1_2.png';
import phone2_1Src from '@/public/phone2_1.png';
import phone2_2Src from '@/public/phone2_2.png';
import phone3Src from '@/public/phone3.png';
import MessageBlock from './MessageBlock';

export default function OurAdvantages() {
  return (
    <div className="mx-auto w-[1320px]">
      <h3 className="pb-20 text-center text-[40px] font-semibold text-white">
        Наши преимущества
      </h3>
      <div className="flex gap-5">
        <CardAdvantages
          title="Блокчейн TON"
          text="Проводите высокоскоростные и надежные транзакции, не беспокоясь о безопасности ваших цифровых активов"
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
          title="Интуитивный интерфейс"
          text="Простой и функциональный интерфейс, который будет понятен каждому"
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
          title="Реферальная система"
          text="Получайте бонусы за каждого приглашенного вами друга"
        >
          <div className="relative h-[470px] w-[228px]">
            <Image
              src={phone3Src}
              alt="phone3"
              className="absolute -right-20 top-10 -z-10 rotate-[5.5deg] rounded-[30px] border-2"
            />
            <div className="absolute -left-16 top-5 rotate-[-5deg]">
              <MessageBlock mainText="Invited friend" secondText="+200 Points">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[26.95px] w-[26.95px]"
                >
                  <path
                    d="M18 2H6C4.34 2 3 3.33 3 4.97V15.88C3 17.52 4.34 18.85 6 18.85H6.76C7.56 18.85 8.32 19.16 8.88 19.72L10.59 21.41C11.37 22.18 12.64 22.18 13.42 21.41L15.13 19.72C15.69 19.16 16.46 18.85 17.25 18.85H18C19.66 18.85 21 17.52 21 15.88V4.97C21 3.33 19.66 2 18 2ZM12 5.75C13.29 5.75 14.33 6.79 14.33 8.08C14.33 9.37 13.29 10.41 12 10.41C10.71 10.41 9.67 9.36 9.67 8.08C9.67 6.79 10.71 5.75 12 5.75ZM14.68 15.06H9.32C8.51 15.06 8.04 14.16 8.49 13.49C9.17 12.48 10.49 11.8 12 11.8C13.51 11.8 14.83 12.48 15.51 13.49C15.96 14.16 15.48 15.06 14.68 15.06Z"
                    fill="white"
                  />
                </svg>
              </MessageBlock>
            </div>
            <div className="absolute left-[-5rem] top-24 rotate-[-1deg]">
              <MessageBlock mainText="Friend’s mint" secondText="+100 Points">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 14L13 2V10H18L11 22V14H6Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </svg>
              </MessageBlock>
            </div>
            <div className="absolute left-[-5.5rem] top-44 rotate-[2deg]">
              <MessageBlock mainText="Friend’s mint" secondText="+100 Points">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 14L13 2V10H18L11 22V14H6Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </svg>
              </MessageBlock>
            </div>
            <div className="absolute left-[-4.5rem] top-64 rotate-[-3deg]">
              <MessageBlock mainText="Invited friend" secondText="+200 Points">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[26.95px] w-[26.95px]"
                >
                  <path
                    d="M18 2H6C4.34 2 3 3.33 3 4.97V15.88C3 17.52 4.34 18.85 6 18.85H6.76C7.56 18.85 8.32 19.16 8.88 19.72L10.59 21.41C11.37 22.18 12.64 22.18 13.42 21.41L15.13 19.72C15.69 19.16 16.46 18.85 17.25 18.85H18C19.66 18.85 21 17.52 21 15.88V4.97C21 3.33 19.66 2 18 2ZM12 5.75C13.29 5.75 14.33 6.79 14.33 8.08C14.33 9.37 13.29 10.41 12 10.41C10.71 10.41 9.67 9.36 9.67 8.08C9.67 6.79 10.71 5.75 12 5.75ZM14.68 15.06H9.32C8.51 15.06 8.04 14.16 8.49 13.49C9.17 12.48 10.49 11.8 12 11.8C13.51 11.8 14.83 12.48 15.51 13.49C15.96 14.16 15.48 15.06 14.68 15.06Z"
                    fill="white"
                  />
                </svg>
              </MessageBlock>
            </div>
          </div>
        </CardAdvantages>
      </div>
    </div>
  );
}
