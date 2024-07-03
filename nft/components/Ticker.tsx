import TickerBlock from './TickerBlock';

export default function Ticker() {
  return (
    <div className="animate-ticker mx-auto flex w-[3600px] gap-6">
      <TickerBlock />
      <TickerBlock />
      <TickerBlock />
      <TickerBlock />
      <TickerBlock />
    </div>
  );
}
