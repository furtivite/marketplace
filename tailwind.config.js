const { tailwindColors } = require('./src/shared/config/tailwind/colors.cjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
