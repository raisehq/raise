const report = require('../results/merge.report.json');
const cypress = require('cypress');
const marge = require('mochawesome-report-generator');
const { merge } = require('mochawesome-merge');
const fs = require('fs');
const { getFilesFromErrors, getErrors, getResume } = require('./utils');
const request = require('request');
const TOKEN = 'xoxb-478563985954-751579816592-hIuXjoLQw6AezawP2EJEc0dk';

const text = getResume(report) + getErrors(report);

sendNotification(text);
const files = getFilesFromErrors();
Object.keys(files).map((key) => files[key].forEach((path) => uploadDocuments(key, path)));

function uploadDocuments(comment, file) {
  console.log(' --- ', comment, file);

  request.post(
    {
      url: 'https://slack.com/api/files.upload',
      formData: {
        token: TOKEN,
        title: file.split('/').pop(),
        filename: file.split('/').pop(),
        filetype: 'auto',
        channels: '#ci',
        file: fs.createReadStream(file)
      }
    },
    function (err, response) {
      if (err) console.error(err);
      console.log(JSON.parse(response.body));
    }
  );
}

function sendNotification(text) {
  request.post(
    'https://hooks.slack.com/services/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',
    {
      headers: { 'Content-Type': 'application/json' },
      json: { text }
    },
    (error, res, body) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log(`statusCode: ${res.statusCode}`);
      console.log(body);
    }
  );
}
