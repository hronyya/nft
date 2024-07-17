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
    <div className="minism:scale-[0.85] minism:my-0 minism:mt-0 -my-[280px] mx-auto -mt-[420px] flex w-[350px] scale-[0.7] flex-col items-center gap-[100px] lg:scale-100">
      {Benefits.map((benefit, id) => (
        <Benefit key={id} data={{ id, ...benefit }} />
      ))}
    </div>
  );
}
