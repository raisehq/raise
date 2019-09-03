import Web3 from 'web3';
import PrivateKeyProvider from 'truffle-privatekey-provider';

describe('Go To Dashboard', () => {
  it('Login', async () => {
    cy.on('window:before:load', win => {
      const provider = new PrivateKeyProvider(
        Cypress.env('eth_priv_key'),
        Cypress.env('eth_provider')
      );
      win.web3 = new Web3(provider); // eslint-disable-line no-param-reassign
    });

    cy.viewport('macbook-13');
    cy.login();
    cy.visit(Cypress.env('url'));

    cy.wait(4000);
    cy.get(':nth-child(2) > a').should('have.length', 1);
    cy.get(':nth-child(2) > a').click();
    cy.get('.card > .button').should('have.length', 1);
    cy.wait(2000);
    cy.get('.card > .button').click();
    cy.wait(60000);
    cy.get('#btn-check', { timeout: 60000 }).should('have.length', 1);
    cy.get('#btn-check').click();
  });
});
