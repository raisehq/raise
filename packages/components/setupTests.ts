import { configureToMatchImageSnapshot } from 'jest-image-snapshot';
import { setDefaultOptions } from 'jsdom-screenshot';

// TravisCI and Linux OS require --no-sandbox to be able to run the tests
// https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-on-travis-ci

if (process.env.CI === 'true') {
  console.log('Puppeter CI');
}
setDefaultOptions({
  launch: { args: process.env.CI === 'true' ? ['--no-sandbox'] : [] },
});

jest.setTimeout(10000);

const customConfig = {
  failureThreshold: 0.07,
  failureThresholdType: 'percent',
};

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customDiffConfig: customConfig,
});

expect.extend({ toMatchImageSnapshot });
