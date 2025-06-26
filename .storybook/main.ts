import { resolve } from 'path';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)', '../src/**/*.mdx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },

  viteFinal: async (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/storybook/';
    }

    config.resolve ??= {};
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      '@': resolve(__dirname, '../src'),
      '@shared': resolve(__dirname, '../src/shared'),
      '@tools': resolve(__dirname, '../tools'),
    };

    const tailwindcss = (await import('tailwindcss')).default;
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const tailwindConfig = require('../tailwind.storybook.config.cjs');

    config.css = {
      postcss: {
        plugins: [tailwindcss(tailwindConfig)],
      },
    };

    return config;
  },
};

export default config;
