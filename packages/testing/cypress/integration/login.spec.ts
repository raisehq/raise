describe('Login', function() {
  it('Make Login', function() {
    cy.web3('lender');
    cy.visit(`${Cypress.env('url')}login`);
    cy.wait(2000);
    const user = Cypress.env('user');
    cy.get('#input-login').should('have.length', 1);
    cy.get('.process').matchImageSnapshot('login_modal');
    cy.get('#input-login').type(user['lender'].email);
    cy.get('#input-password').should('have.length', 1);
    cy.get('#input-password').type(user['lender'].password);
    cy.wait(1000);
    cy.get('.process').matchImageSnapshot('login_modal_filled');
    cy.get('#btn-login').click();
  });
});
