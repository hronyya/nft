import Link from 'next/link';

import YouToubeSVG from './icons/YouToubeSVG';
import TelegramSVG from './icons/TelegramSVG';
import TwitterSVG from './icons/TwitterSVG';

export default function NavLinks() {
  return (
    <div className="flex gap-[30px]">
      <Link href="">
        <YouToubeSVG />
      </Link>

      <Link href="">
        <TelegramSVG />
      </Link>

      <Link href="">
        <TwitterSVG />
      </Link>
    </div>
  );
}
