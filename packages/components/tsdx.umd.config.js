const externals = [
  'react',
  'react-dom',
  'styled-components',
  'semantic-ui-react',
];
module.exports = {
  rollup(config, options) {
    config.output.globals = {
      ...config.output.globals,
      'semantic-ui-react': 'semanticUIReact',
    };
    config.format = 'umd';
    config.name = 'RaiseComponents';
    config.external = id => externals.includes(id);
    return config;
  },
};
