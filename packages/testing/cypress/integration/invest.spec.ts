describe('LENDER', function () {
    beforeEach(function () {
        cy.web3('lender');
        cy.login('lender');
        cy.mockAPI('lender');
    });
    it('Invest', function () {
        cy.visit(Cypress.env('url'));
        cy.addLoanAndCard('CREATED')
        cy.wait(4000);
        cy.get('#btn-lender-open').should('have.length', 1);
        cy.get('.borderless').matchImageSnapshot('menu_lender');
        cy.get('#btn-lender-open').click();
        cy.wait(4000);
        cy.get('#btn-invest-all').should('have.length', 1);
        cy.get('.small > .content').matchImageSnapshot('modal_invest_lender_empty');
        cy.get('#btn-invest-all').click();
        cy.wait(4000);
        cy.get('#btn-invest-confirm').should('have.length', 1);
        cy.get('.small > .content').matchImageSnapshot('modal_invest_lender_full');
        cy.get('#btn-invest-confirm').click();
        cy.wait(4000);
    });
});
