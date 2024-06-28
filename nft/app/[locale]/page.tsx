import Hero from './_components/Hero';
import Ticker from './_components/Ticker';
import MotivationalBlock from './_components/MotivationalBlock';
import OurAdvantages from './_components/OurAdvantages';
import MoreBenefits from './_components/MoreBenefits';
import Banner from './_components/Banner';
import initTranslations from '../i18n';
import TranslationsProvider from './_contexts/TranslationsProvider';

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
      <main>
        <Hero />
        <Ticker />
        <MotivationalBlock />
        <OurAdvantages />
        <MoreBenefits positionGif={1} />
        <MoreBenefits positionGif={2} />
        <Banner />
      </main>
    </TranslationsProvider>
  );
}
