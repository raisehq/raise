/* tslint:disable */
const utils = require('../../../client/src/utils/index');

describe('BORROWER', function () {
  beforeEach(function () {
    cy.login('borrower');
    cy.web3('borrower');

  });

  it('Go to create loan', function () {

    cy.visit(Cypress.env('url'));
    cy.mockAPI();
    cy.addCards('CREATED');
    cy.wait(4000);

    cy.get('#options-menu > #menu-1 > a')
      .should('have.length', 1)
      .then(() => { });

    cy.wait(2000);
    cy.get('#options-menu > #menu-1 > a').matchImageSnapshot('menu_option_borrower');
    cy.get('.borderless').matchImageSnapshot('menu_borrower');
    cy.get('#options-menu > #menu-1 > a').click();
    cy.wait(2000);

    cy.get('#input-amount').should('have.length', 1);
    cy.wait(2000);
    cy.get('#input-amount').matchImageSnapshot('amount');
    cy.get('body').matchImageSnapshot('content_borrower');
    cy.get('#input-amount')
      .clear()
      .type(10);

    cy.wait(2000);

    cy.get('.card > .button').should('have.length', 1);

    cy.wait(2000);
    cy.get('.card > .button').click();

    cy.get('#btn-check', { timeout: 120000 }).should('have.length', 1);
    cy.wait(2000);
    cy.get('#btn-check').matchImageSnapshot('loan_created_button');
    cy.get('#btn-check').click();
    cy.wait(2000);
    cy.get('.heroCard', { timeout: 120000 })
      .its('length')
      .should('be.gte', 1);
    cy.get('.heroCard:nth-child(1)').matchImageSnapshot('new_loan_created');
    cy.wait(4000);
  });
});
/* tslint:enable */
