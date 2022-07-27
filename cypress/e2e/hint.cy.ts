/// <reference types="cypress"/>

describe('Hint', () => {
  it('fills each empty cell', () => {
    cy.visit('/');
    // Validate cells are filled
    cy.get('.game__cell--filled').should('have.length', 45);
    // Validate cells are empty
    cy.get('.game__cell').not('.game__cell--filled')
    // Click on each empty cell
    .each(($elt) => {
      cy.wrap($elt).click();
      cy.get('.status__action-hint').click();
    })
    // Validate success message
    cy.contains('.overlay__text', 'You solved it').should('be.visible');
  })
})