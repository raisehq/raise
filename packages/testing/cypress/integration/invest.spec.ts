describe('LENDER', function () {
  beforeEach(function () {
    cy.mockAPI('lender');
    cy.web3('lender');
    cy.login('lender');
  
  });
  it('Invest', function () {
    cy.visit(Cypress.env('url'));
    cy.addLoanAndCard('CREATED');
    cy.wait(8000);
    cy.get('#btn-lender-open').should('have.length', 1);
    cy.get('#btn-lender-open').click();
    cy.wait(4000);
    cy.get('#btn-invest-all').should('have.length', 1);
    cy.get('.small > .content').matchImageSnapshot('modal_invest_lender_empty');
    cy.wait(2000);
    cy.get('#btn-invest-all').click({ force: true });
    cy.get('#btn-check-term-condition-invest').check({ force: true });
    cy.wait(4000);
    cy.get('#btn-invest-confirm').should('have.length', 1);
    cy.get('.small > .content').matchImageSnapshot('modal_invest_lender_full');
    cy.get('#btn-invest-confirm').click();
    cy.wait(2000);
    cy.get('#modal-success').matchImageSnapshot('modal_success');
    cy.wait(4000);
  });
});
