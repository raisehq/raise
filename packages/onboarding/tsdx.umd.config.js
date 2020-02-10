// Analyze rollup bundle size
// const analyzer = require('rollup-plugin-analyzer');

const externals = ['react', 'react-dom', 'react-is', 'styled-components', 'semantic-ui-react'];
// const resolve = require('rollup-plugin-node-resolve');
// const commonjs = require('rollup-plugin-commonjs');
module.exports = {
  // prettier-ignore
  rollup(config, options) {
    config.output.globals = {
      ...config.output.globals,
      'semantic-ui-react': 'semanticUIReact',
      'react-is': 'ReactIs',
    };
    config.output.format = 'umd';
    config.output.name = 'RaiseOnboarding';
    config.external = id => externals.includes(id);
    // config.plugins.push(resolve({
    //   mainFields: ['module', 'main'],
    //   browser: true,
    //   // extensions: [ '.mjs', '.js', '.jsx', '.json' ],
    //   preferBuiltins: true,
    //   // dedupe: [ 'react', 'react-dom' ],
    //   // customResolveOptions: {
    //   //   moduleDirectory: 'js_modules'
    //   // }
    // }));
    // config.plugins.push(commonjs({
    //   exclude: [
    //     'node_modules/typescript/**',
    //     'node_modules/tsdx/**',
    //     'node_modules/tslib/**',
    //     'node_modules/@bloomprotocol/share-kit-react/**',
    //     'node_modules/resolve/**'
    //   ]
    // }));
    // config.plugins.push(analyzer());
    return config;
  }
};
