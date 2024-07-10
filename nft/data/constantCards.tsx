import imgMonke from '@/public/monkeImg.png';
import imgMilk from '@/public/milkImg.png';
import imgTon from '@/public/tonImg.png';

export const CARD_MONO_DATA = [
  {
    imgSrc: imgMonke.src,
    name: 'Monke',
    minted: [596, 999],
    mints: 127,
    startDate: new Date('2024-06-25T00:00:00'),
    endDate: new Date('2024-06-26T07:11:00'),
    className:
      'absolute right-[-20%] top-[-50%] -z-10 rotate-12 sm:right-[-10%] sm:top-[-10%] md:right-[-5%] lg:right-[-5%] xl:right-[-5%] xl:w-[319px] 2xl:right-[5%]',
    transformOrigin: 'center center',
  },
  {
    imgSrc: imgMilk.src,
    name: '[ MiLK Collection ]',
    minted: [596, 999],
    mints: 127,
    startDate: new Date('2024-06-25T00:00:00'),
    endDate: new Date('2024-06-26T07:11:00'),
    className:
      'absolute top-[-59.5%] right-[-12.5%] -z-20 -rotate-3 sm:top-44 sm:right-[-8%] md:right-[0%] lg:right-[0%] lg:top-[-30%] xl:right-[2%] 2xl:right-[10.5%]',
    transformOrigin: 'center center',
  },
  {
    imgSrc: imgTon.src,
    name: 'TON Collection',
    minted: [596, 999],
    mints: 127,
    startDate: new Date('2024-06-25T00:00:00'),
    endDate: new Date('2024-06-26T07:11:00'),
    className:
      'absolute left-[-17%] top-[-64%] -z-20 -rotate-6 sm:left-[-10%] sm:top-[-22%] md:-top-36 md:left-[-5%] md:w-[40%] lg:left-[-2%] xl:left-[2%] 2xl:left-[6%]',
    transformOrigin: 'center center',
  },
];
