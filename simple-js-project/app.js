// Number Guessing Game for Beginners

// This function generates a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// This function starts the game
function startGame() {
  // Welcome message
  alert("Welcome to the Number Guessing Game!");

  // Game settings
  const minNumber = 1;
  const maxNumber = 10;
  const maxAttempts = 3;

  // Generate the secret number
  const secretNumber = generateRandomNumber(minNumber, maxNumber);

  // Variable to track if the player won
  let playerWon = false;

  // Game instructions
  alert(
    `I'm thinking of a number between ${minNumber} and ${maxNumber}.\nYou have ${maxAttempts} attempts to guess it!`
  );

  // For loop to give the player multiple attempts
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    // Get player's guess using prompt
    let playerGuess = prompt(
      `Attempt ${attempt}/${maxAttempts}: Enter your guess:`
    );

    // Convert the input to a number
    playerGuess = Number(playerGuess);

    // Conditional statements to check the guess
    if (isNaN(playerGuess)) {
      // If input is not a number
      alert("That's not a valid number! Try again.");
      // Decrease attempt counter since this wasn't a valid attempt
      attempt--;
    } else if (playerGuess < minNumber || playerGuess > maxNumber) {
      // If guess is outside the valid range
      alert(`Please enter a number between ${minNumber} and ${maxNumber}!`);
      attempt--;
    } else if (playerGuess < secretNumber) {
      // If guess is too low
      alert("Too low! Try a higher number.");
    } else if (playerGuess > secretNumber) {
      // If guess is too high
      alert("Too high! Try a lower number.");
    } else {
      // If guess is correct
      playerWon = true;
      alert(
        `Congratulations! You guessed the number ${secretNumber} in ${attempt} attempts!`
      );
      break; // Exit the loop since the player won
    }
  }

  // If the player didn't win after all attempts
  if (!playerWon) {
    alert(
      `Game over! The secret number was ${secretNumber}. Better luck next time!`
    );
  }

  // Ask if they want to play again
  const playAgain = confirm("Do you want to play again?");
  if (playAgain) {
    startGame(); // Restart the game if they want to play again
  } else {
    alert("Thanks for playing! Goodbye!");
  }
}

// Start the game when the page loads
startGame();
