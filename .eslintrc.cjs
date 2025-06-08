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
    'fsd-projects',
  ],
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'import/prefer-default-export': 'off',
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],
    'object-curly-spacing': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'fsd-projects/path-checker': ['error', { alias: '@', testFilesPatterns: ['**/*.test.*', '**/*.spec.*'] }],
    'fsd-projects/layer-imports': ['error', {
      alias: '@',
      ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
      rules: [
        { from: 'app', allow: ['pages', 'widgets', 'features', 'entities', 'shared'] },
        { from: 'pages', allow: ['widgets', 'features', 'entities', 'shared'] },
        { from: 'widgets', allow: ['features', 'entities', 'shared'] },
        { from: 'features', allow: ['entities', 'shared'] },
        { from: 'entities', allow: ['shared'] },
        { from: 'shared', allow: [] },
      ],
    }],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      excludedFiles: ['vite.config.ts'],
      parserOptions: {
        project: ['./tsconfig.app.json'],
        tsconfigRootDir: __dirname,
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      extends: ['airbnb-typescript'],
      plugins: ['@typescript-eslint'],
      rules: {
        'object-curly-spacing': 'off',
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],
        '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/destructuring-assignment': 'off',
        'react/button-has-type': 'off',
        'import/extensions': ['error', 'ignorePackages', { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }],
        'import/prefer-default-export': 'off',
        'react/function-component-definition': ['error', { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }],
        'no-plusplus': 'off',
        'react/no-array-index-key': 'off',
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      parserOptions: { project: undefined },
      rules: {
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'object-curly-spacing': 'off',
      },
    },
    {
      files: ['tools/**/*.{js,mjs}'],
      parserOptions: { project: undefined },
      rules: {
        'import/extensions': 'off',
        'no-underscore-dangle': 'off',
        'no-console': 'off',
      },
    },
    {
      files: ['vite.config.ts'],
      parserOptions: { project: undefined },
      rules: {
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/dot-notation': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true, optionalDependencies: false, peerDependencies: false }],
      },
    },
    {
      files: ['vitest.workspace.ts'],
      parserOptions: { project: undefined },
      rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true, optionalDependencies: false, peerDependencies: false }],
      },
    },
    {
      files: ['vitest.config.ts'],
      parserOptions: { project: undefined },
      rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true, optionalDependencies: false, peerDependencies: false }],
      },
    },
    {
      files: ['**/*.test.*', '**/*.spec.*'],
      rules: {
        'fsd-projects/layer-imports': 'off',
      },
    },
    {
      files: ['.eslintrc.cjs'],
      rules: {
        'object-curly-spacing': 'off',
      },
    },
    {
      files: ['vitest.config.cjs'],
      parserOptions: { project: undefined },
      rules: {
        'import/no-extraneous-dependencies': ['error', {
          devDependencies: true,
          optionalDependencies: false,
          peerDependencies: false,
        }],
      },
    },
  ],
};
