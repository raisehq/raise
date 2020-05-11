const cypress = require('cypress');
const marge = require('mochawesome-report-generator');
const { merge } = require('mochawesome-merge');
const fs = require('fs');
const { getFilesFromErrors, getErrors, getResume } = require('./utils');
const request = require('request');
const TOKEN = 'cGwUPD2dMOFAdiGmIoS81e2l';
var MY_SLACK_WEBHOOK_URL =
  'https://hooks.slack.com/services/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';
var slack = require('slack-notify')(MY_SLACK_WEBHOOK_URL);

const ClientSlack = require('node-slack-upload');
const slackUpload = new ClientSlack(TOKEN);

const options = {
  reportDir: 'cypress/results'
};
cleanDir(options.reportDir)
  .then(cypress.run())
  .then(
    () => {
      generateReport();
    },
    (error) => {
      generateReport();
      console.error(error);
      process.exit(1);
    }
  );

function generateReport() {
  return merge(options).then((report) => {
    fs.writeFileSync(`${options.reportDir}/merge.report.json`, JSON.stringify(report));
    slack.bug(getResume(report) + getErrors(report));
    const files = getFilesFromErrors();
    Object.keys(files).map((key) => files[key].forEach((path) => uploadDocuments(key, path)));

    marge.create(report, options);
  });
}

function uploadDocuments(comment, file) {
  slackUpload.uploadFile(
    {
      file: fs.createReadStream(file),
      filetype: 'post',
      title: file.split('/').pop(),
      initialComment: comment,
      channels: '#ci'
    },
    function (err, data) {
      if (err) {
        console.error('[uploadfile] ERROR: ', err);
      } else {
        console.log('[uploadfile] ', data);
      }
    }
  );
}
