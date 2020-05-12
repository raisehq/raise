// Analyze rollup bundle size
// const analyzer = require('rollup-plugin-analyzer');

const INJECT_PROCESS_MODULE_ID = '\0inject-process';

const externals = [
  'react',
  'react-dom',
  'react-is',
  'styled-components',
  'semantic-ui-react',
  'chart.js',
  'moment',
  'graphql.js',
  '@bloomprotocol/share-kit-react/dist/index',
  '@bloomprotocol/share-kit-react',
];

module.exports = {
  rollup(config, options) {
    config.output.globals = {
      ...config.output.globals,
      'semantic-ui-react': 'semanticUIReact',
      'react-is': 'ReactIs',
      'graphql.js': 'graphql',
    };
    config.output.format = 'umd';
    config.output.name = 'RaiseComponents';
    config.external = (id) => externals.includes(id);
    // config.plugins.push(analyzer());
    config.plugins.push({
      name: 'inject-process-plugin',
      resolveId(id) {
        // this tells Rollup not to try to resolve imports from our virtual id
        if (id === INJECT_PROCESS_MODULE_ID) {
          return INJECT_PROCESS_MODULE_ID;
        }
      },
      load(id) {
        if (id === INJECT_PROCESS_MODULE_ID) {
          // All fields of 'process' we want to mock are top level exports of the module.
          // For now I hardcoded "NODE_ENV" but you probably want to put more logic here.
          const env = {
            NODE_ENV: 'production',
            REACT_APP_HOST_IMAGES: process.env.REACT_APP_HOST_IMAGES,
            REACT_APP_DAI_ADDRESS: process.env.REACT_APP_DAI_ADDRESS,
          };
          return `export const env = ${JSON.stringify(env)};\n`;
        }
      },
      transform(code, id) {
        // Each module except our virtual module gets the process mock injected.
        // Tree-shaking will make sure the import is removed from most modules later.
        // This will produce invalid code if a module defines a top-level "process" variable, so beware!
        if (id !== INJECT_PROCESS_MODULE_ID) {
          return `import * as process from '${INJECT_PROCESS_MODULE_ID}';\n${code}`;
        }
      },
    });
    return config;
  },
};
