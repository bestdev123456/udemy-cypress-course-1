/// <reference types="cypress" />

it('adds a new todo item', () => {
    cy.visit('http://localhost:3000');
    cy.get('.new-todo')
      .type('have peace{enter}');
  
});

it('completes todo item', () => {
  
    cy.get('.toggle')
       .click();

});

it('deletes todo item', () => {
    cy.get('.destroy')
       .click();
  
});