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
    cy.get('[data-cy=userChoice]').should("have.value", "Rock"); 
    //Check for computer option
    cy.get('[data-cy=computerChoice]').then(($computerChoice) => {
      // If the computer option is set to "rock"
      if ($computerChoice.val()=="Rock") {
        // The result is a tie
        cy.get('[data-cy=result]').should("have.value", "You tie!");
      } else if ($computerChoice.val()=="Paper") {
        // The user looses
        cy.get('[data-cy=result]').should("have.value", "Boo loser!");
      } else {
        // The user wins
        cy.get('[data-cy=result]').should("have.value", "You win!");
      }
    });
  });

  // User plays with Paper
  it('play with Paper', () => {
    // Click the "Paper" button
    cy.get('[data-cy="paper"]').should("exist").click();
    // Check that the user option is "paper"
    cy.get('[data-cy="userChoice"]').should("have.value", "Paper");
    // Check for computer option
    cy.get('[data-cy="computerChoice"]').then(($computerChoice) => {
      // If the computer option is set to "rock"
      if ($computerChoice.val()=="Rock") {
        // The user wins
        cy.get('[data-cy="result"]').should("have.value", "You win!");
      // If the computer option is set to "paper"
      } else if ($computerChoice.val()=="Paper") {
        // The result is a tie
        cy.get('[data-cy="result"]').should("have.value", "You tie!");
      // If the computer option is set to "scissors"
      } else {
        // The user looses
        cy.get('[data-cy="result"]').should("have.value", "Boo loser!");
      }
    });
  });

  // User plays with Scissors
  it('play with Scissors', () => {
    // Click the "Scissors" button
    cy.get('[data-cy="scissors"]').should("exist").click();
    // Check that the user option is "scissors"
    cy.get('[data-cy="userChoice"]').should("have.value", "Scissors");
    // Check for computer option
    cy.get('[data-cy="computerChoice"]').then(($computerChoice) => {
      // If the computer option is set to "rock"
      if ($computerChoice.val()=="Rock") {
        // The user looses
        cy.get('[data-cy="result"]').should("have.value", "Boo loser!");
      // If the computer option is set to "paper"
      } else if ($computerChoice.val()=="Paper") { 
        // The user wins
        cy.get('[data-cy="result"]').should("have.value", "You win!");
      // If the computer option is set to "paper"
      } else {
        // The result is a tie
        cy.get('[data-cy="result"]').should("have.value", "You tie!");
      }
    });
  });
});
  