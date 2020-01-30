// Analyze rollup bundle size
// const analyzer = require('rollup-plugin-analyzer');

const externals = [
  'react',
  'react-dom',
  'react-is',
  'styled-components',
  'semantic-ui-react',
  'chart.js',
  'moment',
];

module.exports = {
  rollup(config, options) {
    config.output.globals = {
      ...config.output.globals,
      'semantic-ui-react': 'semanticUIReact',
      'react-is': 'ReactIs',
    };
    config.output.format = 'umd';
    config.output.name = 'RaiseComponents';
    config.external = id => externals.includes(id);
    // config.plugins.push(analyzer());
    return config;
  },
};
