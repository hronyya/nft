import BlurBack from './BlurBack';
import Star from './Star';

export default function MotivationalBlock() {
  return (
    <div className="relative mx-auto my-52 flex w-[500px] flex-col text-center">
      <div className="absolute -left-44 rotate-[20deg] scale-100">
        <Star />
      </div>
      <div className="absolute -left-64 top-10 rotate-[30deg] scale-150">
        <Star />
      </div>
      <div className="absolute -left-44 top-28 -rotate-[20deg] scale-125">
        <Star />
      </div>

      <h2 className="mb-40px text-[40px] font-semibold leading-[48px] text-white">
        Новые возможности для сообщества TON
      </h2>
      <p className="text-[20px] font-normal leading-[30px] text-backtext">
        Приложение использует блокчейн TON, открывая новые возможности для
        художников, инвесторов и экспертов в сфере NFT.
      </p>

      <div className="absolute -right-44 rotate-[20deg] scale-100">
        <Star />
      </div>
      <div className="absolute -right-64 top-10 rotate-[30deg] scale-150">
        <Star />
      </div>
      <div className="absolute -right-44 top-28 -rotate-[20deg] scale-125">
        <Star />
      </div>
      <div className="absolute -left-80 -top-20">
        <BlurBack />
      </div>
    </div>
  );
}
