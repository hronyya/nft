import LogoSVG from './icons/LogoSVG';

export default function TickerBlock() {
  return (
    <div className="flex items-center gap-6">
      <LogoSVG />
      <p className="text-8xl+ font-bold text-white/10">NeFT</p>
      <LogoSVG />
      <p className="text-8xl+ font-bold text-white/10">Get</p>
    </div>
  );
}
