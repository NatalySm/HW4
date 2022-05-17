describe('Main News Search test', () => {
    before(() => {
        cy.visit(Cypress.env('baseUrl'));
        cy.login(Cypress.env('user'), Cypress.env('pass'));
    });

    it('Check count of links inside dropdown', () => {
        cy.contains('Tools').should('be.visible').trigger('mouseover');
        cy.get('.dropdown-menu li').should('have.length',14);
    });
});