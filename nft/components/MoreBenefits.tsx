'use client';

import Benefit from './Benefit';
import gif1 from '@/public/gifForPhone1.gif';
import gif2 from '@/public/gifForPhone2.gif';

const Benefits = [
  {
    gifSrc: gif1,
    gifPosition: 0,
  },
  {
    gifSrc: gif2,
    gifPosition: 1,
  },
];

export default function MoreBenefits() {
  return (
    <div className="mx-auto flex w-[350px] flex-col items-center gap-[100px]">
      {Benefits.map((benefit, id) => (
        <Benefit key={id} data={{ id, ...benefit }} />
      ))}
    </div>
  );
}
