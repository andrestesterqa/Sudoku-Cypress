describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get('.status__time').should('contain', '00:03');
  })
})