// @ts-ignore-file

const responses = {};

const mock = config => {
  console.log('#################################');

  console.log('[MOCK] REQUEST -----', config);
  console.log('#################################');

  return Promise.resolve();
};
// @ts-ignore
console.log(' Cypress exist? :', window.Cypress, window.Cypress ? mock : false);
// @ts-ignore
export default window.Cypress ? mock : false;
