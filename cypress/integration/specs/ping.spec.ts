// **Run once before each test case**
beforeEach(function(){
    console.log('see.. this function is run EACH time');
});
describe('Create spec file with test suite with 3 test cases', () => {
    it('Intranet Happy path login', () => {
        // how to use env variables
        cy.visit(Cypress.env('baseUrl'));
        cy.get('#username').type(Cypress.env('user'));
        // use log false to hide password from cypress logs
        cy.get('#password').type(Cypress.env('pass'), { log: false });
        // simple click action example
        cy.contains('Login').click();
        // cy.pause();

        cy.get('#profile > .avatar-block').click();

        // variable using pure typescript
        const userName = Cypress.env('user').replace('.', "-");

        // example with text contains assertion
        cy.get('.user-nicename').contains(userName);
        // example using arrow function to manipulate element as object
        cy.get('.user-nicename').contains(userName).should((elem) => {
            expect(elem.text()).to.contains('@' + userName);
        });
    })

});