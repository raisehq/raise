const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    semi: 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/semi': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/order': 'warn',
    'operator-linebreak': 'off',
    'no-console': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, packageDir: [__dirname, path.join(__dirname, '/../../')] }
    ],
    'implicit-arrow-linebreak': 0,
    'react/jsx-first-prop-new-line': 0,
    'object-curly-newline': 0,
    'react/no-array-index-key': 0,
    'import/no-useless-path-segments': 0,
    'function-paren-newline': 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
