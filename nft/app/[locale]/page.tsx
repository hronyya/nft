import Hero from '@/components/Hero';
import MotivationalBlock from '@/components/MotivationalBlock';
import OurAdvantages from '@/components/OurAdvantages';
import MoreBenefits from '@/components/MoreBenefits';
import Banner from '@/components/Banner';

export const metadata = {
  title: 'NFT-платформа',
  description:
    'NFT-платформа, использующая блокчейн TON для высокоскоростных и надежных транзакций.',
};

export default async function Home() {
  return (
    <>
      <Hero />
      <MotivationalBlock />
      <OurAdvantages />
      <MoreBenefits />
      <Banner />
    </>
  );
}
