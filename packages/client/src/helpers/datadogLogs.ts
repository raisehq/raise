import { datadogLogs } from '@datadog/browser-logs';

datadogLogs.init({
  clientToken: process.env.REACT_APP_DATADOG || '',
  datacenter: 'eu',
  env: process.env.NODE_ENV,
  forwardErrorsToLogs: true,
  sampleRate: 100
});

export default datadogLogs;
