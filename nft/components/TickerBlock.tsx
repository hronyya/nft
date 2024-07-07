import LogoSVG from './icons/LogoSVG';

export default function TickerBlock() {
  return (
    <div className="flex items-center gap-0 sm:gap-6">
      <LogoSVG />
      <p className="text-[50px] font-bold text-white/10 sm:text-8xl+">NeFT</p>
      <LogoSVG />
      <p className="text-[50px] font-bold text-white/10 sm:text-8xl+">Get</p>
    </div>
  );
}
