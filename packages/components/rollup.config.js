import typescript from '@rollup/plugin-typescript';
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import json from '@rollup/plugin-json';
import localResolve from 'rollup-plugin-local-resolve';

import pkg from './package.json';

const INPUT_FILE_PATH = 'src/index.ts';
const OUTPUT_NAME = 'external';

const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

const PLUGINS = [
  json(),
  typescript(),
  babel({
    exclude: 'node_modules/**',
  }),
  localResolve(),
  resolve({
    browser: true,
  }),
  commonjs({
    include: ['node_modules', 'node_modules/**', 'node_modules/**/*'],
    namedExports: {
      'node_modules/daggy/src/daggy.js': ['daggy'],
      'node_modules/react-is/index.js': ['isElement', 'isValidElementType'],
    },
  }),
  filesize(),
];

const EXTERNAL = ['react', 'react-dom'];

const OUTPUT_DATA = [
  {
    file: 'bundle.umd.js',
    format: 'umd',
  },
  {
    file: 'bundle.cjs.js',
    format: 'cjs',
  },
  {
    file: 'bundle.es.js',
    format: 'es',
  },
];

const config = OUTPUT_DATA.map(({ file, format }) => ({
  input: INPUT_FILE_PATH,
  output: {
    file,
    format,
    name: OUTPUT_NAME,
    globals: GLOBALS,
  },
  external: EXTERNAL,
  plugins: PLUGINS,
}));

export default config;
