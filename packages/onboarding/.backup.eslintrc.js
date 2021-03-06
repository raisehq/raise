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
    'react/jsx-one-expression-per-line': 'off',
    'no-console': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, packageDir: [__dirname, path.join(__dirname, '/../../')] }
    ],
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'object-curly-newline': 0,
    '@typescript-eslint/ban-ts-ignore': 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
