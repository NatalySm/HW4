

describe('Billboard Test', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'));
        cy.login(Cypress.env('user'), Cypress.env('pass'));
        cy.contains('Billboard').should('be.visible').click();
    });

    it('Electronics category has 26 Products', () => {
        cy.contains('Electronics').should('be.visible').click();
        cy.get('.products li').should('have.length',15);
        cy.get('.next').should('be.visible').click();
        cy.get('.products li').should('have.length',11);
    });
    it('Food category has 2 Products', () => {
        cy.contains('Food').should('be.visible').click();
        cy.get('.products li').should('have.length',2);
    });
    it('Other category has 19 Products', () => {
        cy.contains('Other').should('be.visible').click();
        cy.get('.products li').should('have.length',15);
        cy.get('.next').should('be.visible').click();
        cy.get('.products li').should('have.length',4);
    });
    it('Real estate category has 13 Products', () => {
        cy.contains('Real estate').should('be.visible').click();
        cy.get('.products li').should('have.length',13);
    });
    it('Transport category has 21 Products', () => {
        cy.contains('Transport').should('be.visible').click();
        cy.get('.products li').should('have.length',15);
        cy.get('.next').should('be.visible').click();
        cy.get('.products li').should('have.length',6);
    });
});