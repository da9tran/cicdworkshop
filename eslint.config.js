import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginJest from 'eslint-plugin-jest';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
    plugins: {
      jest: pluginJest,
    },
    rules: {
      semi: 'warn',
      'no-console': 'error',
      quotes: ['warn', 'single'],
    },
  },
  pluginJs.configs.recommended,
];
