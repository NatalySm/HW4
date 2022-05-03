// **Run once before each test case**
beforeEach(function(){
    console.log('see.. this function is run EACH time');
});
describe('Create spec file with test suite with 3 test cases', () => {
    it('Intranet Happy path login', () => {
        cy.visit(Cypress.env('baseUrl'));
        cy.get('#username').type(Cypress.env('user'));
        cy.get('#password').type(Cypress.env('pass'), { log: false });
        cy.contains('Login').should('be.visible').click();
        cy.get('#msg.errors').should('not.exist');
        cy.get('#profile > .avatar-block').should('be.visible').click();

        const userName = Cypress.env('user').replace('.', "-");
        cy.get('.user-nicename').contains(userName);
        cy.get('.user-nicename').contains(userName).should((elem) => {
            expect(elem.text()).to.contains('@' + userName);
        });
    });

    it.only('Intranet Login failed', () => {
        cy.visit(Cypress.env('baseUrl'));
        cy.get('#username').type(Cypress.env('user'));
        cy.get('#password').type(Cypress.env('pass'), { log: false });
        cy.contains('Login').should('be.visible').click();
        cy.get('#msg.errors').should('be.visible').contains('Invalid credentials');
    });

    it('Login after logout', () => {
        cy.visit(Cypress.env('baseUrl'));
        cy.get('#username').type(Cypress.env('user'));
        cy.get('#password').type(Cypress.env('pass'), { log: false });
        cy.contains('Login').should('be.visible').click();
        cy.get('#msg.errors').should('not.exist');
        cy.get('.logout-button').should('be.visible').click();
        cy.get('#logout').should('be.visible');
        cy.get('#logout > #msg.success > h2').should('be.visible').contains('Logout successful');
        cy.get('#logout > #msg.success > p').should('be.visible').contains('For security reasons, exit your web browser.');
    });
});