const { tailwindColors } = require('./tools/colors.js');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.stories.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{ts,tsx}',
  ],
  safelist: [
    { pattern: /bg-(primary|outline)-[1-9]00/ },
    { pattern: /text-(primary|outline)-[1-9]00/ },
    { pattern: /border-(primary|outline)-[1-9]00/ },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: tailwindColors,
    },
  },
  plugins: [],
};
