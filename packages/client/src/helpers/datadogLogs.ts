import { datadogLogs } from '@datadog/browser-logs';

datadogLogs.init({
  clientToken: process.env.REACT_APP_DATADOG || '',
  datacenter: 'eu',
  forwardErrorsToLogs: true,
  sampleRate: 100
});

datadogLogs.logger.info('Datadog init', { name: 'datadogInit', id: 1 });

export default datadogLogs;
