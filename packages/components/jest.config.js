const { createJestConfig } = require('tsdx/dist/createJestConfig');
const { paths } = require('tsdx/dist/constants');

process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';

const jestConfig = createJestConfig(undefined, paths.appRoot);

jestConfig.transform['\\.(jpg|jpeg|png|gif|webp|svg)$'] = 'jest-transform-file';
jestConfig.setupFilesAfterEnv = ['./setupTests.ts'];

module.exports = jestConfig;
