describe('Login', function() {
  it('Make Login', function() {
    cy.web3('lender');
    cy.visit(`${Cypress.env('url')}/login`, { failOnStatusCode: false }); // int server returns 404 instead of 200 when a http request is done to the server if not /index
    cy.wait(2000);
    cy.get('#btn-sign-in-email').click();
    cy.wait(2000);
    cy.get('.process').matchImageSnapshot('login_modal');
    const user = Cypress.env('user');
    cy.get('#input-login').should('have.length', 1);
    cy.get('#input-login').type(user['lender'].email);
    cy.get('#input-password').should('have.length', 1);
    cy.get('#input-password').type(user['lender'].password);
    cy.wait(1000);
    cy.get('.process').matchImageSnapshot('login_modal_filled');
    cy.get('#btn-login').click();
    cy.setCookie('X-Canary', 'activated')
  });
});


