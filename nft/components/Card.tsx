import Image, { StaticImageData } from 'next/image';

import { formatDuration } from '@/utils/Date';
import MiniMonitor from './MiniMonitor';
import ClockSVG from './icons/ClockSVG';
import RatingSVG from './icons/RatingSVG';

export default function Card({
  img,
  name,
  minted,
  mints,
  startDate,
  endDate,
}: {
  img: StaticImageData;
  name: string;
  minted: Array<number>;
  mints: number;
  startDate: Date;
  endDate: Date;
}) {
  const dateToEnds: string = formatDuration(startDate, endDate);

  return (
    <div className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] 2xl:w-[22.5%]">
      <div className="-z-10 h-96 w-[20rem] scale-[0.6] rounded-2xl bg-white/10 pt-5 backdrop-blur-sm md:scale-[0.7] lg:scale-75 xl:scale-90 2xl:h-[409.93px] 2xl:scale-100">
        <div className="hy-auto mx-auto w-11/12 text-white 2xl:w-11/12">
          <div
            style={{
              backgroundImage: `url(${img.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="relative mb-2 h-[256px] w-full rounded-[10.2px] 2xl:mb-5"
          ></div>
          <p className="mb-2 text-xl font-semibold 2xl:mb-4">{name}</p>
          <div className="mb-[10.2px] flex items-center gap-[13.59px]">
            <div className="h-[6.8px] w-8/12 rounded-full bg-backloader">
              <div className="h-[6.8px] w-2/3 rounded-full bg-blue-600"></div>
            </div>
            <span className="flex gap-1 text-xs">
              {minted[0]}/{minted[1]}{' '}
              <span className="text-backtext">minted</span>
            </span>
          </div>
          <div className="flex gap-1">
            <MiniMonitor>
              <RatingSVG />
              {mints} mints last hr
            </MiniMonitor>
            <MiniMonitor>
              <ClockSVG />
              Ends in {dateToEnds}
            </MiniMonitor>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardBG({ url, className }: { url: string; className: string }) {
  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={className}
    />
  );
}
export function CardMono({
  imgSrc,
  name,
  minted,
  mints,
  startDate,
  endDate,
  className,
  transformOrigin,
}: {
  imgSrc: string;
  name: string;
  minted: Array<number>;
  mints: number;
  startDate: Date;
  endDate: Date;
  className: string;
  transformOrigin: string;
}) {
  const dateToEnds: string = formatDuration(startDate, endDate);

  return (
    <div className={className}>
      <div
        className="-z-10 h-[400px] w-[300px] scale-[0.4] rounded-2xl bg-white/10 pt-5 backdrop-blur-sm sm:h-[409.93px] sm:w-[265px] sm:scale-[0.6] md:scale-75 lg:scale-100"
        style={{
          transformOrigin: transformOrigin,
        }}
      >
        <div className="hy-auto mx-auto w-11/12 text-white 2xl:w-11/12">
          <div
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="relative mb-2 h-[256px] w-full rounded-[10.2px] 2xl:mb-5"
          />
          <p className="mb-2 text-xl font-semibold 2xl:mb-4">{name}</p>
          <div className="mb-[10.2px] flex items-center gap-[13.59px]">
            <div className="h-[6.8px] w-8/12 rounded-full bg-backloader">
              <div className="h-[6.8px] w-2/3 rounded-full bg-blue-600"></div>
            </div>
            <span className="flex gap-1 text-xs">
              {minted[0]}/{minted[1]}
              <span className="text-backtext">minted</span>
            </span>
          </div>
          <div className="flex gap-1">
            <MiniMonitor>
              <RatingSVG />
              {mints} mints last hr
            </MiniMonitor>
            <MiniMonitor>
              <ClockSVG />
              Ends in {dateToEnds}
            </MiniMonitor>
          </div>
        </div>
      </div>
    </div>
  );
}
