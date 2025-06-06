const { tailwindColors } = require('./tools/colors.js');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.stories.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{ts,tsx}',
  ],
  safelist: [
    { pattern: /^(bg|text|border|fill)-(yellow|red|green|blue|neutral|white|primary)-(100|200|300|400|500|600|700|800|900)$/ },
    { pattern: /^(bg|text|border|fill)-white-0$/ },
    { pattern: /^(top|bottom|left|right)-0$/ },
    { pattern: /^(top|left|right)-1\/2$/ },
    { pattern: /^-?translate-(x|y)-(full|1\/2)$/ },
    { pattern: /^m[trbl]-2$/ },
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
