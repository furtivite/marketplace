const { tailwindColors } = require('./src/shared/config/tailwind/colors.cjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}',       // для компонентов
    './src/**/*.stories.{js,ts,jsx,tsx,mdx}', // для стори
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
