// vitest.config.cjs
const path = require('path');
const { defineConfig } = require('vitest/config');
const svgr = require('@svgr/rollup');

module.exports = defineConfig({
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  plugins: [
    svgr(),
  ],
  test: {
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['**/*.stories.{ts,tsx}'],
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80,
    },
  },
});
