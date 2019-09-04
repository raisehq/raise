import Web3 from 'web3';
import PrivateKeyProvider from 'truffle-privatekey-provider';

describe('BORROWER', () => {
  it('Create Loan', async () => {
    cy.web3('borrower');
    cy.viewport('macbook-13');
    cy.login('borrower');
    cy.visit(Cypress.env('url'));
    cy.wait(4000);
    cy.get(':nth-child(2) > a').should('have.length', 1);
    cy.get(':nth-child(2) > a').click();
    cy.wait(4000);
    cy.get('#input-amount').should('have.length', 1);
    cy.get('#input-amount')
      .clear()
      .type(10);
    cy.get('.card > .button').should('have.length', 1);
    cy.wait(2000);
    cy.get('.card > .button').click();

    cy.get('#btn-check', { timeout: 120000 }).should('have.length', 1);
    cy.get('#btn-check').click();
    cy.get('.heroCard', { timeout: 120000 })
      .its('length')
      .should('be.gte', 1)
      .end();
  });
});
