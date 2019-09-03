import Web3 from 'web3';
import PrivateKeyProvider from 'truffle-privatekey-provider';

describe('Test Login', () => {
  it('Make Login', async () => {
    cy.on('window:before:load', win => {
      const provider = new PrivateKeyProvider(
        Cypress.env('eth_priv_key'),
        Cypress.env('eth_provider')
      );
      win.web3 = new Web3(provider); // eslint-disable-line no-param-reassign
    });
    cy.viewport('macbook-13');
    await cy.visit(Cypress.env('url'));
    cy.wait(1000);
    cy.get('.callToSignIn').click();
    cy.wait(1000);
    cy.get('[data-testid=loginEmail] > input').type(Cypress.env('login_username'));
    cy.get('[data-testid=loginPassword] > input').type(Cypress.env('login_password'));
    cy.get('.sc-likbZx').click();
  });
});
