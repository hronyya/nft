import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '2xl+': [
          '1.75rem',
          {
            // 28px
            lineHeight: '2rem' /* 32px */,
          },
        ],
        '4xl+': [
          '2.5rem',
          {
            // 40px
            lineHeight: '1.75rem', // 28px
          },
        ],
        '8xl+': [
          '6.25rem',
          {
            // 100px
            lineHeight: '1',
          },
        ],
      },
      content: {
        'custom-before':
          'url(\'data:image/svg+xml;utf8,<svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.5" width="34" height="34" rx="17" fill="white" fill-opacity="0.15"/><circle cx="17" cy="17.5" r="7" fill="white"/></svg>\')',
      },
      colors: {
        backloader: '#4F4F53',
        backtext: '#AAAAAA',
        mainback: '#171616',
        blacktext: '#212121',
        backcard: '#212020',
        backmessage: '#3A3A3ACC',
        backbanner: '#212020',
        bannerbluer: '#8482D8',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        monke: '@/public/058810892b364fd6879fe1a6054a3978.png',
      },
    },
  },
  plugins: [],
};
export default config;
