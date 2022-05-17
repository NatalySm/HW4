// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

declare namespace Cypress {
    interface Chainable {
        login(username: string, password: string): void;
        searchAndNavigateToPost(searchName: string, postName: string): void;
    }
}

Cypress.Commands.add('login', (username, password) =>{
    cy.get('#username').type(username);
    cy.get('#password').type(password, {log:false});
    cy.contains('Login').should('be.visible').click();
});

Cypress.Commands.add('searchAndNavigateToPost',(searchName, postName)=>{
    cy.get('#nav-menu-item-search').should('be.visible').click();
    cy.get('.ajax_s').should('be.visible').type(searchName);
    cy.get('.kleo-ajax-type-post').find('.search_title').contains(new RegExp("^" + postName + "$", "g")).should('be.visible').click();
    cy.get('.article-title').should('have.text', postName);
});