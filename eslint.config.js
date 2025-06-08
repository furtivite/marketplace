import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [
            js.configs.recommended,
            'airbnb',
            'airbnb/hooks',
            'airbnb-typescript',
            ...tseslint.configs.recommended,
            'plugin:storybook/recommended',
        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            // Основные правила форматирования по Airbnb
            'indent': ['error', 2, { SwitchCase: 1 }],
            'semi': ['error', 'always'],
            'comma-dangle': ['error', 'always-multiline'],
            'react/react-in-jsx-scope': 'off',
            'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
            // Правила React Hooks
            ...reactHooks.configs.recommended.rules,
            // Правило storybook-refresh
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
        },
    },
);
