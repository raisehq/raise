import { datadogLogs } from '@datadog/browser-logs';

console.log('Client token:::', process.env.REACT_APP_DATADOG);

datadogLogs.init({
  clientToken: process.env.REACT_APP_DATADOG || '',
  datacenter: 'eu',
  forwardErrorsToLogs: true,
  sampleRate: 100
});

export default datadogLogs;
