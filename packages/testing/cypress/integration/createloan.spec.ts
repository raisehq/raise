/* tslint:disable */

describe('BORROWER', function() {
  beforeEach(function() {
    cy.login('borrower');
    cy.mockAPI('borrower');
    cy.web3('borrower');
  });

  it('Go to create loan', function() {
    cy.visit(Cypress.env('url'));

    cy.get('#btn-warning-close').should('have.length', 1);
    cy.wait(2000);

    cy.addCards('CREATED');
    cy.wait(4000);

    cy.get('#btn-create-loan').should('have.length', 1);

    cy.wait(2000);
    cy.get('#btn-create-loan').matchImageSnapshot('menu_option_borrower');
    cy.get('#btn-create-loan').click();
    cy.wait(2000);

    cy.get('#input-amount').should('have.length', 1);
    cy.wait(2000);
    cy.get('#input-amount').matchImageSnapshot('amount');
    cy.get('body').matchImageSnapshot('content_borrower');
    cy.get('#input-amount')
      .clear()
      .type(10);
    cy.get('input#btn-check-term-conditions').check({ force: true });

    cy.wait(2000);

    cy.get('.card > .button').should('have.length', 1);

    cy.wait(2000);
    cy.get('.card > .button').click();

    cy.get('#btn-check', { timeout: 120000 }).should('have.length', 1);
    cy.wait(2000);
    cy.get('#btn-check').matchImageSnapshot('loan_created_button');
    cy.get('#btn-check').click();
    cy.addCards('CREATED');
    cy.wait(2000);
    cy.get('.heroCard', { timeout: 120000 })
      .its('length')
      .should('be.gte', 1);
    cy.get('.heroCard:nth-child(1)').matchImageSnapshot('new_loan_created');
    cy.wait(4000);
  });
});
/* tslint:enable */
