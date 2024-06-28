import Image, { StaticImageData } from 'next/image';

import { formatDuration } from '@/app/[locale]/_utils/Date';
import MiniMonitor from './MiniMonitor';

export default function Card({
  imgSrc,
  name,
  minted,
  mints,
  startDate,
  endDate,
}: {
  imgSrc: StaticImageData;
  name: string;
  minted: Array<number>;
  mints: number;
  startDate: Date;
  endDate: Date;
}) {
  const dateToEnds: string = formatDuration(startDate, endDate);

  return (
    <div className="h-[409.93px] w-[295.38px] rounded-[14.18px] bg-white/10 backdrop-blur-sm">
      <div className="hy-auto mx-auto w-10/12 pb-5 pt-5 text-white">
        <div className="relative mb-5 size-[256px] rounded-[10.2px]">
          <Image
            placeholder="blur"
            src={imgSrc}
            alt="image"
            fill
            className="rounded-[10.2px] object-cover"
          />
        </div>
        <p className="mb-4 text-[20.39px]">{name}</p>
        <div className="mb-[10.2px] flex items-center gap-[13.59px]">
          <div className="h-[6.8px] w-8/12 rounded-full bg-backloader">
            <div className="h-[6.8px] w-2/3 rounded-full bg-blue-600"></div>
          </div>
          <span className="flex gap-1 text-[11.05px]">
            {minted[0]}/{minted[1]}{' '}
            <span className="text-backtext">minted</span>
          </span>
        </div>
        <div className="flex gap-[10.2px]">
          <MiniMonitor>
            <svg
              width="13.59"
              height="13.59"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 22C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20V22ZM4 3C4 2.44772 3.55228 2 3 2C2.44772 2 2 2.44772 2 3H4ZM5.18404 20.564L5.63803 19.673H5.63803L5.18404 20.564ZM3.43597 18.816L4.32698 18.362L4.32698 18.362L3.43597 18.816ZM7 17C7 17.5523 7.44772 18 8 18C8.55228 18 9 17.5523 9 17H7ZM9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12H9ZM12 17C12 17.5523 12.4477 18 13 18C13.5523 18 14 17.5523 14 17H12ZM14 3C14 2.44772 13.5523 2 13 2C12.4477 2 12 2.44772 12 3L14 3ZM17 17C17 17.5523 17.4477 18 18 18C18.5523 18 19 17.5523 19 17H17ZM19 8C19 7.44772 18.5523 7 18 7C17.4477 7 17 7.44772 17 8H19ZM21 20H9.4V22H21V20ZM4 14.6V3H2V14.6H4ZM9.4 20C8.26339 20 7.47108 19.9992 6.85424 19.9488C6.24907 19.8994 5.90138 19.8072 5.63803 19.673L4.73005 21.455C5.32234 21.7568 5.96253 21.8826 6.69138 21.9422C7.40855 22.0008 8.2964 22 9.4 22V20ZM2 14.6C2 15.7036 1.99922 16.5914 2.05782 17.3086C2.11737 18.0375 2.24318 18.6777 2.54497 19.27L4.32698 18.362C4.19279 18.0986 4.10062 17.7509 4.05118 17.1458C4.00078 16.5289 4 15.7366 4 14.6H2ZM5.63803 19.673C5.07354 19.3854 4.6146 18.9265 4.32698 18.362L2.54497 19.27C3.02433 20.2108 3.78924 20.9757 4.73005 21.455L5.63803 19.673ZM9 17V12H7V17H9ZM14 17L14 3L12 3L12 17H14ZM19 17V8H17V17H19Z"
                fill="white"
              />
            </svg>
            {mints} mints last hr
          </MiniMonitor>
          <MiniMonitor>
            <svg
              width="13.59"
              height="13.59"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.941 6.06157C16.7662 4.88689 15.2694 4.08695 13.64 3.76291C12.0106 3.43886 10.3217 3.60526 8.78682 4.24106C7.25197 4.87686 5.94012 5.95351 5.01716 7.33487C4.09419 8.71622 3.60156 10.3402 3.60156 12.0016C3.60156 13.6629 4.09419 15.2869 5.01716 16.6683C5.94012 18.0496 7.25197 19.1263 8.78682 19.7621C10.3217 20.3979 12.0106 20.5643 13.64 20.2402C15.2694 19.9162 16.7662 19.1162 17.941 17.9416C18.7249 17.1637 19.3472 16.2384 19.7718 15.2189C20.1965 14.1994 20.4151 13.106 20.4151 12.0016C20.4151 10.8972 20.1965 9.80372 19.7718 8.78424C19.3472 7.76475 18.7249 6.83941 17.941 6.06157ZM14.305 13.8736C14.2584 13.9378 14.1991 13.9917 14.1309 14.0322C14.0627 14.0727 13.9869 14.0988 13.9083 14.1089C13.8296 14.119 13.7497 14.1129 13.6735 14.091C13.5972 14.0691 13.5263 14.0319 13.465 13.9816L11.629 12.5656C11.5575 12.5077 11.4999 12.4345 11.4604 12.3515C11.421 12.2684 11.4007 12.1775 11.401 12.0856V7.96957C11.401 7.81044 11.4642 7.65782 11.5767 7.5453C11.6892 7.43278 11.8418 7.36957 12.001 7.36957C12.1601 7.36957 12.3127 7.43278 12.4252 7.5453C12.5377 7.65782 12.601 7.81044 12.601 7.96957V11.7976L14.197 13.0336C14.2595 13.0814 14.3119 13.1412 14.3512 13.2094C14.3905 13.2777 14.4159 13.353 14.4259 13.4311C14.4359 13.5092 14.4304 13.5885 14.4097 13.6644C14.3889 13.7404 14.3533 13.8114 14.305 13.8736Z"
                fill="white"
              />
            </svg>
            Ends in {dateToEnds}
          </MiniMonitor>
        </div>
      </div>
    </div>
  );
}