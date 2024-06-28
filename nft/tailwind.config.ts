import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
      },
    },
  },
  plugins: [],
};
export default config;
