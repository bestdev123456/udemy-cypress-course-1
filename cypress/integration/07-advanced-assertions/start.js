/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('localhost:3000');
    cy.get('.new-todo')
       .type('buy milk{enter}');

});

it('Checks text of todo item', () => {

  cy
    .get('.todo')
    .then(item => {
      expect (item).to.contain('buy milk');

    });
   // .should('contain.text', 'buy milk');
  
});

it('Checks texts of all todo items', () => {

  cy
    .get('.todo')
    .then(todoslist => {
      expect(todoslist[0]).to.contain('buy milk');
      expect(todoslist[1]).to.contain('wash dishes');
      expect(todoslist[2]).to.contain('create todos list');
    });
  
});

it('Has first todo item with text "wash dishes"', () => {

  cy
    .get('.todo')
    .should('have.length',2)
    .eq(0)
    .should('contain.text', 'wash dishes');
  
});

it('Has first todo item with text "wash dishes" (solution 2)', () => {

  cy
    .get('.todo')
    .should(todoslist => {
      expect(todoslist[0]).to.contain('create todos list');
    });

  
});