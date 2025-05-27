// tailwind.config.ts
import type { Config } from 'tailwindcss';
import { tailwindColors } from './src/shared/config/tailwind/colors';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.stories.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        ...tailwindColors,
      },
    },
  },
  plugins: [],
};

export default config;
