describe('Main News Search test', () => {
    before(() => {
        cy.visit(Cypress.env('baseUrl'));
        cy.login(Cypress.env('user'), Cypress.env('pass'));
    });

    it('Search and open current main post', () => {
        cy.get('#main-hot').find('.eg-front-page-featured-grid-element-1').first().then((elem) =>{
        const mainNewsLabel = elem.text();
        cy.searchAndNavigateToPost(mainNewsLabel, mainNewsLabel);
        });
    });
});