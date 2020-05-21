/* tslint:disable */

describe('LENDER', function () {
  beforeEach(function () {
    const isCanary = JSON.parse(Cypress.env('isCanary') || 'false');
    cy.CookieXCanary(isCanary);
    cy.createLoan('CREATED');
    cy.wait(5000);
    cy.mockAPI('lender', isCanary);
    cy.login('lender', isCanary);
    cy.web3('lender');
  });
  it('Invest', function () {
    cy.butterCMS();
    cy.visit(Cypress.env('url'));

    cy.wait(3000);

    cy.get('#btn-warning-close', { timeout: 120000 }).should('have.length', 1);
    cy.get('#btn-warning-close').click();
    cy.checkFakeDai(); // Send totally fake GraphQL daiBalances ws message
    cy.wait(300);
    cy.get('#btn-invest-all').should('have.length', 1);
    cy.get('#btn-invest-all').matchImageSnapshot('invest');
    cy.wait(2000);
    // cy.get('#sidebar').matchImageSnapshot('modal_invest_lender_empty');
    // // cy.wait(2000);
    cy.get('#btn-invest-all').click({ force: true });
    // cy.get('#btn-invest-all').click({ force: true });
    cy.get('#btn-check-term-condition-invest').check({ force: true });
    cy.get('#btn-invest-confirm').should('have.length', 1);
    cy.wait(300);
    // cy.get('#sidebar').matchImageSnapshot('modal_invest_lender_full');
    cy.get('#btn-invest-confirm').click();
    cy.wait(300);
    cy.get('#modal-success').matchImageSnapshot('modal_success');
  });
});
