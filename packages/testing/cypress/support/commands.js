import Web3 from 'web3';
import PrivateKeyProvider from 'truffle-privatekey-provider';
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
import cards from '../fixtures/cards.json';
import { createCard } from './cardManager';
//ADD PLUGIN
addMatchImageSnapshotCommand({
  failureThreshold: 0.03, // threshold for entire image
  failureThresholdType: 'percent', // percent of image or number of pixels
  customDiffConfig: { threshold: 0.1 }, // threshold for each pixel
  capture: 'viewport' // capture viewport in screenshot});
});
//OUR COMMANDS
Cypress.Commands.add('web3', function(type) {
  cy.on('window:before:load', win => {
    const user = Cypress.env('user');
    const provider = new PrivateKeyProvider(user[type].private_key, Cypress.env('eth_provider'));
    win.web3 = new Web3(provider); // eslint-disable-line no-param-reassign
  });
});
Cypress.Commands.add('addCards', function(type) {
  cy.window().then(win => {
    const newCard = createCard(type);
    console.log(' ----> ', cards.users[0].loanRequests.length);
    cards.users[0].loanRequests.push(newCard);
    console.log(' ----> ', cards.users[0].loanRequests.length);
    win.UseWebsocket.trigger('loansByAccount', cards);
  });
});
Cypress.Commands.add('login', function(type) {
  const user = Cypress.env('user');
  cy.request({
    method: 'POST',
    url: Cypress.env('api') + 'api/jwt/authenticate',
    body: {
      email: user[type].email,
      password: user[type].password,
      'g-recaptcha-response': 'xxxxxxxxx'
    }
  }).then(({ body: { data }, status }) => {
    if (status !== 200) throw new Error('Error login');
    cy.log(data);
    const auth = {
      id: data.user.id,
      status: data.user.status,
      token: data.JwtToken,
      type: data.user.accounttype_id
    };

    window.localStorage.setItem('auth', JSON.stringify(auth));
    window.localStorage.setItem('user', JSON.stringify(data.user));
  });
});
