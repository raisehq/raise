/* tslint:disable */

describe('BORROWER', function() {
  beforeEach(function() {
    const isCanary = JSON.parse(Cypress.env('isCanary') || 'false');
    cy.CookieXCanary();
    cy.login('borrower', isCanary);
    cy.mockAPI('borrower', isCanary);
    cy.web3('borrower');
  });

  it('Go to create loan', function() {
    cy.visit(Cypress.env('url'));

    cy.acceptedTokens();
    cy.wait(300);

    cy.get('#btn-create-loan').should('have.length', 1);

    cy.get('#btn-create-loan').matchImageSnapshot('menu_option_borrower');
    cy.get('#btn-create-loan').click();

    cy.get('#input-amount').should('have.length', 1);
    cy.wait(300);
    cy.get('#input-amount').matchImageSnapshot('amount');
    cy.get('body').matchImageSnapshot('content_borrower');
    cy.get('#input-amount')
      .clear()
      .type(10);
    cy.get('input#btn-check-term-conditions').check({ force: true });
    cy.get('input#btn-check-auth-term-conditions').check({ force: true });

    cy.get('.btn-confirm-loan').click();

    cy.get('#btn-check', { timeout: 12000 }).should('have.length', 1);
    cy.wait(300);
    cy.get('#btn-check').matchImageSnapshot('loan_created_button');
    cy.get('#btn-check').click();
    cy.addCards('CREATED');
    cy.get('.heroCard', { timeout: 12000 })
      .its('length')
      .should('be.gte', 1);
    cy.get('.heroCard')
      .first()
      .matchImageSnapshot('new_loan_created');
  });
});
/* tslint:enable */
