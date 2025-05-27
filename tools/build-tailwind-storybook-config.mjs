import { writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { tailwindColors } from './colors.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, '../tailwind.storybook.config.mjs');

try {
  console.log('📦 Генерация tailwind.storybook.config.mjs...');

  const config = `
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.stories.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{ts,tsx}'
  ],
  safelist: [
    { pattern: /bg-(primary|outline)-[1-9]00/ },
    { pattern: /text-(primary|outline)-[1-9]00/ },
    { pattern: /border-(primary|outline)-[1-9]00/ }
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: ${JSON.stringify(tailwindColors, null, 2)}
    }
  },
  plugins: []
};
`;

  writeFileSync(outputPath, config);
  console.log(`✅ tailwind.storybook.config.mjs создан: ${outputPath}`);
} catch (error) {
  console.error('❌ Ошибка при генерации:');
  console.error(error);
  process.exit(1);
}
