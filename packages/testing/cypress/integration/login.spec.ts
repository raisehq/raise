describe('Login', function () {
  beforeEach(function () {
    const isCanary = JSON.parse(Cypress.env('isCanary') || 'false');
    cy.CookieXCanary(isCanary);
  });
  it('Make Login', function () {
    cy.web3('lender');
    cy.visit(`${Cypress.env('url')}/login`, { failOnStatusCode: false }); // int server returns 404 instead of 200 when a http request is done to the server if not /index
    cy.wait(2000);
    cy.get('#btn-sign-in-email').click();
    cy.wait(2000);
    cy.get('.process').matchImageSnapshot('login_modal', { force: true });
    const userEmail = Cypress.env('userEmail');
    const userPassword = Cypress.env('userPassword');
    cy.get('#input-login').should('have.length', 1);
    cy.get('#input-login').type(userEmail);
    cy.get('#input-password').should('have.length', 1);
    cy.get('#input-password').type(userPassword);
    cy.wait(1000);
    cy.get('.process').matchImageSnapshot('login_modal_filled', { force: true });
    cy.get('#btn-login').click();
  });
});
