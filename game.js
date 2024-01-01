let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector(".msg-container #msg");
const userScoreInfo = document.querySelector("#user-score");
const compScoreInfo = document.querySelector("#comp-score");

const genCompChoice = () => {
    let options = ["stone","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScoreInfo.innerText = userScore;
        message.innerText = `You win! Yours ${userChoice} beats ${compChoice}.`;
        message.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScoreInfo.innerText = compScore;
        message.innerText = `You lost ${compChoice} beats your ${userChoice}.`;
        message.style.backgroundColor = "red";
    }
};
const drawGame = () => {
    console.log("Game was draw.");
    message.innerText = "Game was Draw. Play again.";
    message.style.backgroundColor = "#081b31";
};

const playGame = (userChoice) => {
    console.log("user choice", userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice", compChoice);

    if(userChoice === compChoice){
        // Draw Game Condition
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "stone") {
            //computer choice may be paper/scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            //computer choice may be stone/scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            // computer choice may be stone/paper
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// Access user's choice by user
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});