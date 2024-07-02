import TickerBlock from './TickerBlock';

export default function Ticker() {
  return (
    <div className="animate-ticker mx-auto flex w-[240%] gap-6">
      <TickerBlock />
      <TickerBlock />
      <TickerBlock />
      <TickerBlock />
      <TickerBlock />
    </div>
  );
}
