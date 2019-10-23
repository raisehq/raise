import Web3 from 'web3';
import PrivateKeyProvider from 'truffle-privatekey-provider';
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
import cardsBorrower from '../fixtures/cards_borrower.json';
import cardsLender from '../fixtures/cards_lender.json';
import { createCard } from './cardManager';

// Require only when start test
import contracts from '../../contracts/contracts.json';

/*
  Add plugin to make snapshots
*/
addMatchImageSnapshotCommand({
  failureThreshold: 0.03, // threshold for entire image
  failureThresholdType: 'percent', // percent of image or number of pixels
  customDiffConfig: { threshold: 0.1 }, // threshold for each pixel
  capture: 'viewport' // capture viewport in screenshot});
});

/*
  Mock Web3 connection with GANACHE
*/
Cypress.Commands.add('web3', function(type) {
  cy.on('window:before:load', win => {
    const user = Cypress.env('user');
    const provider = new PrivateKeyProvider(
      user[type].private_key,
      Cypress.env('eth_provider'),
      0,
      10
    );
    win.web3 = new Web3(provider); // eslint-disable-line no-param-reassign
    win.contracts = contracts;
  });
});

/*
  Mock the graph and the card creation
*/
Cypress.Commands.add('addCards', function(type) {
  cy.window().then(win => {
    const newCard = createCard(type);
    cardsBorrower.users[0].loanRequests.push(newCard);
    win.UseWebsocket.trigger('loansByAccount', cardsBorrower);
    win.UseWebsocket.trigger('liveAuctionsByAccount', cardsBorrower);
  });
});

/*
  Mock the graph and the card creation
*/
Cypress.Commands.add('addLoanAndCard', function(type) {
  cy.window().then(async win => {
    const user = Cypress.env('user');
    const provider = new PrivateKeyProvider(
      user['borrower'].private_key,
      Cypress.env('eth_provider'),
      0,
      10
    );
    const web3 = new Web3(provider); // eslint-disable-line no-param-reassign

    const netId = await web3.eth.net.getId();
    const params = [
      '10000000000000000000000',
      '10000000000000000000000',
      '10000000000000000000',
      '300',
      '2592000'
    ];
    const LoanDispatcher = new web3.eth.Contract(
      contracts.abi.LoanDispatcher,
      contracts.address[netId].LoanDispatcher
    );
    console.log(' LOAN DISPACHER : ', LoanDispatcher);
    const tx = await LoanDispatcher.methods
      .deploy(...params)
      .send({ from: user['borrower'].address });
    console.log('>>> TX : ', tx);
    const newCard = createCard(type, tx.events.LoanContractCreated.returnValues.contractAddress);
    cardsLender.loans.push(newCard);
    console.log('CARDS :', cardsLender);
    win.UseWebsocket.trigger('suggestedLender', cardsLender);
  });
});

/*
  Mock Login process
*/
Cypress.Commands.add('login', function(type, env = 'local') {
  if (env === 'local') {
    // Mock API login
    const auth = {
      id: 'user:12345',
      status: 2,
      token: 'XXXXXX',
      type: type === 'lender' ? 2 : 1
    };
    const user = {
      id: 'user:12345',
      email: 'noreply@raise.it',
      firstname: null,
      lastname: null,
      status: 2,
      accounttype_id: type === 'lender' ? 2 : 1,
      delete: 0,
      referral_code: 'TEST01'
    };
    cy.window().then(win => {
      win.localStorage.setItem('auth', JSON.stringify(auth));
      win.localStorage.setItem('user', JSON.stringify(user));
    });
  } else {
    // Only for test directly with the API
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
  }
});

/*
  Mock API requests
*/
Cypress.Commands.add('mockAPI', function(type) {
  cy.on('window:before:load', win => {
    const user = Cypress.env('user');

    win.AxiosMockResponses = [
      ['POST', 'https://api.herodev.es/api/jwt/verify', 200, { mock: true, success: true }],
      [
        'GET',
        'https://api.herodev.es/api/cryptoaddress/user/user:12345',
        200,
        {
          mock: true,
          success: true,
          data: [
            {
              id: 'cryptoaddress:eaabbd22-7c22-4be6-9a4d-09dd660ee50c',
              herouser_id: 'user:12345',
              address: user[type].address,
              cryptotype_id: 2,
              site: null,
              created_on: '2019-09-03T15:20:44.038Z',
              deleted: 0
            }
          ]
        }
      ],
      [
        'PUT',
        'https://api.herodev.es/api/users/user:12345',
        200,
        {
          mock: true,
          success: true,
          data: {
            id: 'user:12345',
            username: 'Mr.Rob',
            email: 'noreply@herotoken.io',
            referral_code: 'XXX1',
            referrer_code: null,
            firstname: null,
            lastname: null,
            status: 2,
            accounttype_id: type === 'lender' ? 2 : 1,
            delete: 0,
            phone: null,
            birthday: null
          }
        }
      ]
    ];
  });
});

