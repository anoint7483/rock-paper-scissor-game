let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg"); // Use correct selector for the message element
const user_score = document.getElementById("user-score");
const comp_score = document.getElementById("comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = 'Game was a draw. Play again!';
    msg.style.color = "yellow";
}

const showWinner = (userWin) => {
    if (userWin) {
        console.log("you win!");
        msg.innerText = "You win!";
        msg.style.color = "green";
        userScore ++;
        user_score.innerText = userScore
    } else {
        console.log("you lose");
        msg.innerText = "You lose.";
        msg.style.color = "red";
        compScore++;
        comp_score.innerText = compScore
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
            if (compChoice === "paper") {
                userWin = false;
            } else {
                userWin = true;
            }
        } else if (userChoice === "paper") {
            if (compChoice === "scissors") {
                userWin = false;
            } else {
                userWin = true;
            }
        } else {
            if (compChoice === "rock") {
                userWin = false;
            } else {
                userWin = true;
            }
        }
        

        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // Get user choice by its id (rock, paper, or scissors)
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
