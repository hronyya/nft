import TickerBlock from './TickerBlock';

export default function Ticker() {
  return (
    <div className="flex gap-6 overflow-hidden">
      <TickerBlock />
      <TickerBlock />
      <TickerBlock />
      <TickerBlock />
    </div>
  );
}
