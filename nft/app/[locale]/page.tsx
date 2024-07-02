import initTranslations from '../i18n';
import TranslationsProvider from '@/contexts/TranslationsProvider';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import MotivationalBlock from '@/components/MotivationalBlock';
import OurAdvantages from '@/components/OurAdvantages';
import MoreBenefits from '@/components/MoreBenefits';
import Banner from '@/components/Banner';

export const metadata = {
  title: 'NFT-платформа',
  description:
    'NFT-платформа, использующая блокчейн TON для высокоскоростных и надежных транзакций.',
};

const i18Namespaces = ['home'];

export default async function Home({ params: { locale } }: { params: any }) {
  const { resources } = await initTranslations(locale, i18Namespaces);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18Namespaces}
    >
      <main className="mt-56">
        <Hero />
        <MotivationalBlock />
        <OurAdvantages />
        <MoreBenefits positionGif={1} />
        <MoreBenefits positionGif={2} />
        <Banner />
      </main>
    </TranslationsProvider>
  );
}
