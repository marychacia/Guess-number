
// Variables
let guesses = 0; // Keep track of the number of guesses
let score = 0; // Keep track of the score
let random_number; // Declare random_number variable without assigning a value

// Function to start a new game
function newGame() {
    // Generate a new random number for the new game
    random_number = Math.floor(Math.random() * 100) + 1;
    console.log("randomNumber: ", random_number);

    // Reset variables
    guesses = 0;
    score = 0;

   // Reset everything
    document.getElementById("feedback").innerText = "";
    document.getElementById("attemptsCount").innerText = "0"; // Use innerText to clear attempts count
    document.getElementById("score").innerText = "";
    document.body.style.backgroundColor = ''; // Reset background color
}


// Function to check the user's input when the form is submitted
function checkNumber(event) {
    event.preventDefault(); // Prevent form submission

    // Get the user's guess from the input field
    let user_guess = document.getElementById("guessInput").value;

    // Convert the user's guess to an integer
    user_guess = parseInt(user_guess);

    // Check if the input is empty or not a valid number
    if (isNaN(user_guess) || user_guess < 1 || user_guess > 100) {
        document.getElementById("feedback").innerText = "Please enter a valid number between 1 and 100.";
        // Clear the input field after a wrong guess
        document.getElementById("guessInput").value = "";
        return;
    }

    guesses++; // Increment the number of guesses only if the input is a valid number

    // Update the attempts count
    document.getElementById("attemptsCount").innerText = guesses;

    // Check if the user guess is correct
    if (user_guess === random_number) {
        // Set the feedback paragraph to an empty string
        document.getElementById("feedback").innerText = "";

        // Display the score
        document.getElementById("score").innerHTML = "You got it in " + guesses + " guesses!";
      // Add a class to the body to set the fireworks background
      document.body.classList.add('fireworks-background'); // Change background

        // After 5 seconds, ask the user if they want to play again
        setTimeout(() => {
            let playAgain = confirm("Congratulations! You guessed the number!\nDo you want to play again?"); //n stands for a next line in text
            if (playAgain) {
                // Refresh the page to start a new game
                window.location.reload();
            } else {
                // Close the display and reveal a message
                closeDisplay();
            }
        }, 5000); //timeout time
    } else if (user_guess > random_number) {
        document.getElementById("feedback").innerText = "Too high! Guess again.";
        // Clear the input field after a wrong guess
        document.getElementById("guessInput").value = "";
    } else {
        document.getElementById("feedback").innerText = "Too low! Guess again.";
      // Clear the input field after a wrong guess
        document.getElementById("guessInput").value = "";
    }
}

// Function to close the display and thank the user for playing
function closeDisplay() {
    document.write("<h1>Thank you for playing</h1>");
}

// Start the new game
newGame();
