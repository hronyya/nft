import { Inter_Tight, Roboto } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const roboto = Inter_Tight({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} container mx-auto w-[73%] overflow-x-hidden bg-mainback`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
