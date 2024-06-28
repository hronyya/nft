import Link from 'next/link';
import MiniLogoSVG from './icons/MiniLogoSVG';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <MiniLogoSVG />
      <p className="text-2xl font-bold text-white">NeFT</p>
    </Link>
  );
}
