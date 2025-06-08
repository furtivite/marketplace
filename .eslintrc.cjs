// .eslintrc.cjs
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:storybook/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
    'react-refresh',
  ],
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    },
  },
  rules: {
    // фикс object-curly-spacing для JS/JSX
    'object-curly-spacing': ['error', 'always'],           // здесь
    'indent': ['error', 2, { SwitchCase: 1 }],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      extends: ['airbnb-typescript'],
      plugins: ['@typescript-eslint'],
      rules: {
        // и аналогичная настройка для @typescript-eslint
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],  // здесь
        '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      parserOptions: {
        project: undefined,
      },
      rules: {
        // отключаем TS-правила
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
};
