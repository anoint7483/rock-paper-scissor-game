let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg"); // Use correct selector for the message element

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = 'Game was a draw. Play again!';
}

const showWinner = (userWin) => {
    if (userWin) {
        console.log("you win!");
        msg.innerText = "You win!";
    } else {
        console.log("you lose");
        msg.innerText = "You lose.";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // Get user choice by its id (rock, paper, or scissors)
        const userChoice = choice.getAttribute("class");
        playGame(userChoice);
    });
});
