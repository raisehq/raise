const fsExtra = require('fs-extra');
const fs = require('fs');
const path = require('path');
const cleanDir = (fileDir) => {
  return fsExtra.emptyDir(fileDir).catch(console.error);
};

const getFilesFromErrors = (showScreenshots = true, showVideos = true, showDifferences = true) => {
  const specs = fs.readdirSync(__dirname + '/../screenshots');
  return specs.reduce((prev, next, i) => {
    prev[next] = [];
    const screenshots = fs.readdirSync(__dirname + '/../screenshots/' + next);
    if (screenshots.length > 0) {
      showScreenshots &&
        prev[next].push(
          screenshots
            .map((screen) => path.resolve(`${__dirname}/../screenshots/${next}/${screen}`))
            .pop()
        );
      showVideos && prev[next].push(path.resolve(`${__dirname}/../videos/${next}.mp4`));

      if (showDifferences && fs.existsSync(`${__dirname}/../snapshots/${next}/__diff_output__`)) {
        const differences = fs.readdirSync(`${__dirname}/../snapshots/${next}/__diff_output__`);

        prev[next] = [
          ...prev[next],
          ...differences.map((diff) =>
            path.resolve(`${__dirname}/../snapshots/${next}/__diff_output__/${diff}`)
          )
        ];
      }
    }
    return prev;
  }, {});
};

const getResume = (data) => {
  const text = `
          - suites: ${data.stats.suites} tests: ${data.stats.tests}
          - passes : ${data.stats.passes} 
          - failures : ${data.stats.failures} 
      `;
  return text;
};

const getErrors = (data) => {
  const errors = data.results.reduce((prev, next, i) => {
    const errors = next.suites
      .filter((element) => element.failures.length > 0)
      .map((element) => {
        const parsedErrors = element.tests.map((tests) => {
          return `
                  title: ${tests.fullTitle}
                  error: ${tests.err.message}
              `;
        });

        return `
              title: ${element.title}
              tests:
                  ${parsedErrors.join()}
          `;
      });
    prev.push(errors ? errors.join() : '');
    return prev;
  }, []);
  const text = errors.join('');
  return text;
};
module.exports = { getResume, getErrors, cleanDir, getFilesFromErrors };
