/*
GAME FUNCTION:
- Player must guess a number between min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player fo the correct answer if loose
- Let player choose to play again.
*/
// Game vars
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      guessBtn = document.querySelector("#guess-btn"),
      guessInput = document.querySelector("#guess-input"),
      message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener("mousedown", function(e){
    if(e.target.className === "play-again"){
        window.location.reload();
    }
})

// Get winning number
function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Listen for guess
guessBtn.addEventListener("click", function(){
    let guess = parseInt(guessInput.value);

    // Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, "red");
    
    // Check if guess is correct
    } else if(guess === winningNum){
        // Game won
        gameOver(true, `${guess} is correct! You win!`);
    } else {
        guessesLeft -= 1;

        if(guessesLeft === 0){
            // Game lost
            gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);
        } else {
        // Game continues, answer wrong
        guessInput.style.borderColor = "red";
        guessInput.value = "";
        setMessage(`${guess} is incorrect, ${guessesLeft} guesses left`, "red");
        }
    }
});

// Set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

// Game over
function gameOver(won, msg){
    let color;
    won === true ? color = "green" : color = "red";
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg, color);
    guessBtn.value = "Play Again?";
    guessBtn.className += "play-again";
}