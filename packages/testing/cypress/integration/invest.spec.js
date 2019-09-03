describe('BORROWER', () => {
  it('Invest', async () => {
    cy.web3('borrower');
    cy.viewport('macbook-13');
    cy.login('borrower');
    cy.visit(Cypress.env('url'));

    cy.wait(4000);
    cy.get('#btn-lender-open').should('have.length', 1);
    cy.get('#btn-lender-open').click();
    cy.wait(4000);
    cy.get('#input-value-invest-all').should('have.length', 1);
    cy.get('#input-value-invest-all').click();
    cy.wait(4000);
    cy.get('#btn-confirm-invest').should('have.length', 1);
    cy.get('#btn-confirm-invest').click();
    cy.wait(4000);
  });
});
