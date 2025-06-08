// vitest.config.cjs
const path = require('path');
const { defineConfig } = require('vitest/config');
const { storybookTest } = require('@storybook/experimental-addon-test/vitest-plugin');

// Путь к каталогу проекта
const dirname = __dirname;

module.exports = defineConfig({
  test: {
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
    },
  },
  // Проекты: unit-tests и storybook-tests
  projects: [
    {
      name: 'unit',
      test: {
        include: ['src/**/*.{test,spec}.{ts,tsx}'],
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./vitest.setup.ts'],
      },
    },
    {
      name: 'storybook',
      plugins: [
        storybookTest({ configDir: path.join(dirname, '.storybook') }),
      ],
      test: {
        name: 'storybook',
        environment: 'jsdom',
        globals: true,
        browser: {
          enabled: true,
          headless: true,
          provider: 'playwright',
          instances: [{ browser: 'chromium' }],
        },
        setupFiles: ['.storybook/vitest.setup.ts'],
      },
    },
  ],
});
