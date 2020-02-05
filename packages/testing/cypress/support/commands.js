import Web3 from 'web3';
import PrivateKeyProvider from 'truffle-privatekey-provider';
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
import cardsBorrower from '../fixtures/cards_borrower.json';
import cardsLender from '../fixtures/cards_lender.json';
import users from '../fixtures/users.json';
import { createCard } from './cardManager';

// Require only when start test
import contracts from '../fixtures/contracts.json';

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
    provider.isMetaMask = true;
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
Cypress.Commands.add('checkFakeDai', function(type) {
  cy.window().then(win => {
    const daiBalances = {
      balances: users.map(address => ({ wad: '10000000000000000000', address }))
    };
    win.UseWebsocket.trigger('daiBalance', daiBalances);
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
    kyc_status: 3,
    status: 2,
    accounttype_id: type === 'lender' ? 2 : 1,
    delete: 0,
    referral_code: 'TEST01'
  };
  cy.window().then(win => {
    win.localStorage.setItem('auth', JSON.stringify(auth));
    win.localStorage.setItem('user', JSON.stringify(user));
  });
});

/*
  Mock API requests
*/
Cypress.Commands.add('mockAPI', function(type) {
  cy.on('window:before:load', win => {
    const user = Cypress.env('user');
    win.AxiosMockResponses = [
      ['POST', `${Cypress.env('api')}/jwt/verify`, 200, { mock: true, success: true }], //'https://api.herodev.es
      [
        'GET',
        `${Cypress.env('api')}/cryptoaddress/user/user:12345`,
        200,
        {
          mock: true,
          success: true,
          data: [
            {
              id: 'cryptoaddress:eaabbd22-7c22-4be6-9a4d-09dd660ee50c',
              herouser_id: 'user:12345',
              address: user[type].address,
              cryptotype_id: 1,
              site: null,
              created_on: '2019-09-03T15:20:44.038Z',
              deleted: 0
            }
          ]
        }
      ],
      [
        'PUT',
        `${Cypress.env('api')}/users/user:12345`,
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
            kyc_status: 3,
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

/* 
  Mock Butter cms responses
*/
Cypress.Commands.add('butterCMS', function() {
  cy.on('window:before:load', win => {
    win.ButterCMSMockResponses = {
      warnings: {
        warnings: [
          {
            active: true,
            description:
              'MakerDAO has launched multi-collateral DAI. As a result, the coin we currently know as DAI will now be named SAI (single collateral DAI) and the new multi collateral DAI will take its name. We will be completing technical maintenance to ensure that we will be supporting the multi-collateral DAI. To find out more, please see our blog post about this topic:',
            id: 'dai-warning',
            image: 'https://cdn.buttercms.com/o6n3MyZVTAyx89N9OAU5',
            link: 'https://raise.it/blog/multi-collatorel-dai-what-does-it-mean-for-raise',
            name: 'Important message about DAI new token'
          }
        ]
      },
      get_started: {
        get_started: [
          {
            description:
              'First of all, make sure you have DAI currency to start investing in loan auctions. ↵↵You can check your balance from your dashboard.',
            image: 'https://cdn.buttercms.com/R6J5G9iR3Sc9Gt3L8AUI',
            title: 'Get started'
          },
          {
            description:
              'Raise offers live investment opportunities , an auction closes when the loan gets fully funded, so make sure you place an offer before the auction time is up. Click on any auction to learn more about the borrower.',
            image: 'https://cdn.buttercms.com/wWvP4gR5QJKMjMaHBjBS',
            title: 'Check out the active auctions'
          },
          {
            description:
              'By investing in an active auction you are helping fund a loan. There’s no minimum amount, so feel free to diversify the risk. You will be able to invest as many times as you wish in the same auction, as long as it is still open.',
            image: 'https://cdn.buttercms.com/4dL3e0ubTHuJ13iT9FkR',
            title: 'Place an offer'
          },
          {
            description:
              'If the auction ends successfully, your investment will be active and the loan APR set. If the loan does not get fully funded, you will be able to claim the refund of your bid. Check your active investments details in “My activity”.',
            image: 'https://cdn.buttercms.com/9YZNSZ1nQRC4pmNpnLjF',
            title: 'Wait for payback'
          }
        ]
      },
      companies: {
        companies: [
          {
            address: 'Avenida de la Catedral 6-8. 08002 Barcelona',
            background: 'https://cdn.buttercms.com/SnV5NXlFQDmHObRHyU2n',
            business_plan: '',
            company_name: 'HERO Fintech Solutions Ptd. Ltd.',
            competitive_analysis: '',
            description:
              "<p>HERO Fintech Technologies develops innovative business models to create opportunities and empower financial inclusion in emerging markets. With the rise of technology, our company sees the opportunity to develop business models that would provide global stability within the financial world. Developing countries have found themselves stuck in an environment where they have embraced and are using the latest technology but are still lacking within the financial world.</p>↵<p>Through our previous work, we have learned that specific regions have a population that is fully committed to the internet and are fully utilizing social networks, payment protocols, and online interfaces. The same population is still unbanked or underbanked and it is incredibly difficult for them to attain traditional credit facilities. As a result, we are raising money to develop specific business models that will allow us to distribute credit to these people and create a stronger future.</p>↵<p>By filling our loans, you will see your return of investment but also feel satisfied that you have made a real difference to someone's life.&nbsp;</p>",
            ethereum_address: '0xf3c3a56807978293148a66be349c856a408574c9',
            foundation_date: '2019-09-30T00:00:00',
            logo: 'https://cdn.buttercms.com/YzIsSDsTvCCpZ7pbbaVW',
            operations: '',
            short_description:
              'HERO Fintech Technologies develops innovative business models to create opportunities and empower financial inclusion in emerging markets.',
            slug: 'hero-fintech',
            updated: '',
            url: 'https://herotoken.io/',
            url_text: '',
            user_id: 'user:c13a39df-3e0c-4d2b-afd7-4222812b4772'
          }
        ]
      }
    };
  });
});
