describe('My First Test', () => {
    it('Click different parts of the button', () => {
        // Visit the URL
        cy.visit("https://example.cypress.io/commands/actions")
        // Find the button with the class "action-btn" and click it
        cy.get('.action-btn')
        .click();
        // Find the element with the id "#action-canvas" and click it
        cy.get('#action-canvas')
        .click('topLeft')
        // Now click on its "topLeft"
        cy.get('#action-canvas')
        .click('bottomRight')
        // Click on its "bottomRight"
    })
})