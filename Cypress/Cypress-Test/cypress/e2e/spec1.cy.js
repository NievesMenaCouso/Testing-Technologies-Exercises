describe('My First Test', () => {
  it('Visit the kitchen sink', () => {
    // Visit URL
    cy.visit("https://example.cypress.io")
    // Get the "contains" button
    cy.contains("contains")
    .click();
  })
})