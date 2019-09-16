import Web3 from 'web3';
import PrivateKeyProvider from 'truffle-privatekey-provider';
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
import cards from '../fixtures/cards.json';
import { createCard } from './cardManager';
import contracts from '../../contracts/contracts.json';
//ADD PLUGIN
addMatchImageSnapshotCommand({
  failureThreshold: 0.03, // threshold for entire image
  failureThresholdType: 'percent', // percent of image or number of pixels
  customDiffConfig: { threshold: 0.1 }, // threshold for each pixel
  capture: 'viewport' // capture viewport in screenshot});
});
//OUR COMMANDS
Cypress.Commands.add('web3', function (type) {
  cy.on('window:before:load', win => {
    const user = Cypress.env('user');
    console.log('contracts', contracts)

    const provider = new PrivateKeyProvider(user[type].private_key, Cypress.env('eth_provider'),0,10);
    win.web3 = new Web3(provider); // eslint-disable-line no-param-reassign
    win.contracts = contracts;
  });
});

Cypress.Commands.add('addCards', function (type) {
  cy.window().then(win => {

    const newCard = createCard(type);
    cards.users[0].loanRequests.push(newCard);
    win.UseWebsocket.trigger('loansByAccount', cards);
    win.UseWebsocket.trigger('liveAuctionsByAccount', cards);
  });
});

Cypress.Commands.add('login', function (type) {
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

    const auth = {
      id: data.user.id,
      status: data.user.status,
      token: data.JwtToken,
      type: data.user.accounttype_id
    };
    cy.window().then(win => {
      win.localStorage.setItem('auth', JSON.stringify(auth));
      win.localStorage.setItem('user', JSON.stringify(data.user));
    });
  });
});

Cypress.Commands.add('mockAPI', function (type) {
  cy.window().then(win => {


    // GET /api/jwt/verify

    /* 

    // GET /api/cryptoaddress/user/user:ca821825-16ae-4a7f-94b7-de754c41127f
    /*

     {"success":true,"data":[{"id":"cryptoaddress:eaabbd22-7c22-4be6-9a4d-09dd660ee50c","herouser_id":"user:ca821825-16ae-4a7f-94b7-de754c41127f","address":"0x8945d5947Daf0ab2C318Fa25c702f8339475ed89","cryptotype_id":2,"site":null,"created_on":"2019-09-03T15:20:44.038Z","deleted":0}]}
    */
    // GET /api/users/user:ca821825-16ae-4a7f-94b7-de754c41127f
    /*
    {"success":true,"data":{"id":"user:ca821825-16ae-4a7f-94b7-de754c41127f","username":"Mr.Rob","email":"daniel+borrower@herotoken.io","referral_code":"gKH2dJ","referrer_code":null,"firstname":null,"lastname":null,"status":2,"accounttype_id":1,"delete":0,"phone":null,"birthday":null}}

    */
    // GET /api/kyc/auth/user:ca821825-16ae-4a7f-94b7-de754c41127f
    /* 
      { success: true }
    */
  });
});