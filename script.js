//scoreboard

let humanScore = 0;
let computerScore = 0;

//Computer chooses rock, paper, or scissors string when function is run
function getComputerChoice() {
    let numChoice = Math.floor(Math.random()*3);
        //console.log(numChoice); 
    if (numChoice === 2) {
        console.log("Computer: rock");
        return "rock";
    } else if (numChoice === 1) {
        console.log("Computer: paper");
        return "paper";
    } else {
        console.log("Computer: scissors");
        return "scissors";
    }
}

//Human choose rock, paper, or scissors button and start game
const buttons = document.querySelectorAll("button");

const playerSelection = rock;

buttons.forEach((button) => {
    
    button.addEventListener("click", () => {
        
        playRound(button.id, getComputerChoice());

        console.log("Human Score is: " + humanScore);
        console.log("Computer Score is: " + computerScore);
    
    })
})

    const scoreBoard = document.getElementById("scoreboard");
    const span = document.createElement("span");
    const scores = document.createElement("div");
    scoreBoard.appendChild(span);
    scores.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`;
    scoreBoard.appendChild(scores);



function playRound(humanChoice, computerChoice) {
    if(humanScore >= 5 || computerScore >= 5) {
        return;
    }

    if (humanChoice === "rock" && computerChoice === "scissors") {
        span.textContent = "You win! Rock beats Scissors.";
            humanScore ++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        span.textContent = "You lose! Paper beats Rock.";
            computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        span.textContent = "You win! Paper beats Rock.";
            humanScore ++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        span.textContent = "You lose! Scissors beats Paper.";
            computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        span.textContent = "You win! Scissors beats Paper.";
            humanScore ++;
    } else if (humanChoice === "scissors" && computerChoice === "rock")  {
        span.textContent = "You lose! Rock beats Scissors.";
            computerScore++;
    } else {
        span.textContent = `You tied with the computer! You both choose ${humanChoice}.`;
    }

    if(humanScore >= 5 || computerScore >= 5) {
            
        if (humanScore > computerScore) {
            span.textContent = `Congratulations, You won! Score is ${humanScore} to ${computerScore}`;
        } else {
            span.textContent = `Sorry, you lost to the computer.`;
        }
    };

    scores.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`;
}

    
    

    



    