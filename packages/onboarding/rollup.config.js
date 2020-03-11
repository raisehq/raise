import typescript from '@rollup/plugin-typescript';
import babel from 'rollup-plugin-babel';
import globals from 'rollup-plugin-node-globals';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import json from '@rollup/plugin-json';
import builtins from 'rollup-plugin-node-builtins';
import pkg from './package.json';

const INPUT_FILE_PATH = 'src/index.tsx';
const OUTPUT_NAME = 'external';

const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM'
};

const PLUGINS = [
  builtins(),
  resolve({
    browser: true
  }),
  json(),
  typescript(),
  babel({
    exclude: ['node_modules/**']
  }),
  commonjs({
    include: [
      'node_modules',
      'node_modules/**',
      'node_modules/**/**',
      '@bloomprotocol/share-kit-react'
    ],
    namedExports: {
      'node_modules/daggy/src/daggy.js': ['daggy'],
      'node_modules/react-is/index.js': ['isElement', 'isValidElementType', 'isForwardRef'],
      'node_modules/js-cookie/src/js.cookie.js': ['get', 'set'],
      'node_modules/react-dom/index.js': ['render', 'createPortal', 'findDOMNode'],
      'node_modules/prop-types/index.js': [
        'oneOfType',
        'func',
        'object',
        'string',
        'shape',
        'bool',
        'element'
      ],
      'node_modules/lodash/lodash.js': ['debounce'],
      'node_modules/@bloomprotocol/share-kit-react/dist/index.js': [
        'RequestElement',
        'QROptions',
        'Action',
        'RequestData'
      ]
    }
  }),
  filesize()
];

const EXTERNAL = ['react', 'react-dom'];

const OUTPUT_DATA = [
  {
    file: 'bundle.umd.js',
    format: 'umd'
  },
  // {
  //   file: 'bundle.cjs.js',
  //   format: 'cjs'
  // },
  // {
  //   file: 'bundle.es.js',
  //   format: 'es'
  // },
  {
    file: 'bundle.iife.js',
    format: 'iife'
  }
];

const config = OUTPUT_DATA.map(({ file, format }) => ({
  input: INPUT_FILE_PATH,
  output: {
    file,
    format,
    name: OUTPUT_NAME,
    globals: GLOBALS
  },
  external: EXTERNAL,
  plugins: PLUGINS
}));

export default config;
