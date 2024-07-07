import TickerBlock from './TickerBlock';

export default function Ticker() {
  return (
    <div className="w-[120vw] overflow-hidden">
      <div className="animate-SM mx-auto flex w-[3600px] gap-0 sm:animate-ticker sm:gap-6">
        <TickerBlock />
        <TickerBlock />
        <TickerBlock />
        <TickerBlock />
        <TickerBlock />
        <TickerBlock />
        <TickerBlock />
      </div>
    </div>
  );
}
