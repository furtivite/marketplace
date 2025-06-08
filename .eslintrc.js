module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'plugin:storybook/recommended',
    ],
    plugins: ['react', '@typescript-eslint', 'react-hooks', 'react-refresh'],
    settings: {
        react: { version: 'detect' },
        'import/resolver': {
            node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        },
    },
    rules: {
        'indent': ['error', 2, { SwitchCase: 1 }],
        'semi': ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
};
