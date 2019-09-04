describe('Login', () => {
  it('Make Login', async () => {
    cy.web3('lender');
    cy.viewport('macbook-13');
    cy.visit(Cypress.env('url'));
    cy.wait(4000);
    cy.get('.callToSignIn').click();
    cy.wait(1000);
    const user = Cypress.env('user');
    cy.get('#input-login').should('have.length', 1);
    cy.get('#input-login').type(user['lender'].email);
    cy.get('#input-password').should('have.length', 1);
    cy.get('#input-password').type(user['lender'].password);
    cy.wait(1000);
    cy.get('#btn-login').click();
  });
});
