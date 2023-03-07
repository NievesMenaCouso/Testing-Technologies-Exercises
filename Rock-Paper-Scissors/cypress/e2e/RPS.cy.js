describe('Rock, Paper, Scissors Game', () => {
  // Open the URL for each pass
  beforeEach(()=> {
    cy.visit('Rock, Paper, Scissors!.html')
  });
  // User plays with Rock
  it('play with Rock', () => {
    // Click the "Rock" button
    cy.get('[data-cy=rock]').should("exist").click();
    // Check that the user option is "rock"
    cy.get('[data-cy=userChoice]').invoke('val').should("contain", "Rock"); 
    //Check for computer option
    cy.get('[data-cy="computerChoice"]').then(($computerChoice) => {
      // If the computer option is set to "rock"
      if ($computerChoice.text().includes("Rock")) {
        // The result is a tie
        cy.get('[data-cy=result]').should("contain", "You tie!");
      // If the computer option is set to "paper"
      } else if ($computerChoice.text().includes("Paper")) { 
        // The user looses
        cy.get('[data-cy=result]').should("contain", "Boo loser!");
      // If the computer option is set to "scissors"
      } else if ($computerChoice.text().includes("Scissors")) {
        // The user wins
        cy.get('[data-cy=result]').should("contain","You win!");
      }
    });
  });

  // User plays with Paper
  it('play with Paper', () => {
    // Click the "Paper" button
    cy.get('[data-cy="paper"]').should("exist").click();
    // Check that the user option is "paper"
    cy.get('[data-cy="userChoice"]').invoke('val').should("contain", "Paper");
    // Check for computer option
    cy.get('[data-cy="computerChoice"]').then(($computerChoice) => {
      // If the computer option is set to "rock"
      if($computerChoice.text().includes("Rock")){
        // The user wins
        cy.get('[data-cy="result"]').contains("You win!");
      // If the computer option is set to "paper"
      } else if ($computerChoice.text().includes("Paper")){ 
        // The result is a tie
        cy.get('[data-cy="result"]').contains("You tie!");
      // If the computer option is set to "scissors"
      } else if ($computerChoice.text().includes("Scissors")){
        // The user looses
        cy.get('[data-cy="result"]').contains("Boo loser!");
      }
    });
  });

  // User plays with Scissors
  it('play with Scissors', () => {
    // Click the "Scissors" button
    cy.get('[data-cy="scissors"]').should("exist").click();
    // Check that the user option is "scissors"
    cy.get('[data-cy="userChoice"]').invoke('val').should("contain", "Scissors");
    // Check for computer option
    cy.get('[data-cy="computerChoice"]').then(($computerChoice) => {
      // If the computer option is set to "rock"
      if($computerChoice.text().includes("Rock")){
        // The user looses
        cy.get('[data-cy="result"]').contains("Boo loser!");
      // If the computer option is set to "paper"
      } else if ($computerChoice.text().includes("Paper")){ 
        // The user wins
        cy.get('[data-cy="result"]').contains("You win!");
      // If the computer option is set to "paper"
      } else if ($computerChoice.text().includes("Scissors")){
        // The result is a tie
        cy.get('[data-cy="result"]').contains("You tie!");
      }
    });
  });
});
  