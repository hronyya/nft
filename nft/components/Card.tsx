import Image, { StaticImageData } from 'next/image';

import { formatDuration } from '@/utils/Date';
import MiniMonitor from './MiniMonitor';
import ClockSVG from './icons/ClockSVG';
import RatingSVG from './icons/RatingSVG';

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
    <div className="h-[409.93px] w-full rounded-[14.18px] bg-white/10 backdrop-blur-sm">
      <div className="hy-auto mx-auto w-10/12 pb-5 pt-5 text-white">
        <div className="relative mb-5 h-[256px] w-full rounded-[10.2px]">
          <Image
            placeholder="blur"
            src={imgSrc}
            alt="image"
            fill
            className="rounded-[10.2px] object-cover"
          />
        </div>
        <p className="mb-4 text-xl font-semibold">{name}</p>
        <div className="mb-[10.2px] flex items-center gap-[13.59px]">
          <div className="h-[6.8px] w-8/12 rounded-full bg-backloader">
            <div className="h-[6.8px] w-2/3 rounded-full bg-blue-600"></div>
          </div>
          <span className="flex gap-1 text-xs">
            {minted[0]}/{minted[1]}{' '}
            <span className="text-backtext">minted</span>
          </span>
        </div>
        <div className="flex gap-[10.2px]">
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
  );
}
