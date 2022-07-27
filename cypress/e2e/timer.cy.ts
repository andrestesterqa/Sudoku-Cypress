/// <reference types="cypress"/>

describe('Timer', () => {
  it('Shows 10 seconds', () => {
    cy.visit('/');
    // Way to validate the time is 10 seconds with option to specify the time
    //cy.contains('.status__time', '00:10', { timeout: 10500 });
    for (let i = 0; i < 10; i++) {
      cy.contains('.status__time', `00:0${i}`);
    }
  })
})