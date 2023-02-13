describe('My First Test', () => {
    it('Write your email', () => {
      // Visit URL
      cy.visit("https://example.cypress.io/commands/actions")
      // Get the email input field
      cy.get("#email1")
      .type('nmcouso@gmail.com').should('have.value', 'nmcouso@gmail.com')
    })
  })