

//Computer chooses rock, paper, or scissors string when function is run
function getComputerChoice() {
    let numChoice = Math.floor(Math.random()*3);
        console.log(numChoice); 
    if (numChoice === 2) {
        console.log("rock");
        return "rock";
        
    } else if (numChoice === 1) {
        console.log("paper");
        return "paper";
        
    } else {
        console.log("scissors");
        return "scissors";
        
    }
}
//Human choose rock, paper, or scissors
function getHumanChoice() {
    let answer = prompt("Enter one option: rock, paper, scissors", "");
    let answer2 = answer.toLowerCase();
    if (answer2 === "rock") {
        console.log("rock");
        return "rock";
        
    } else if (answer2 === "paper") {
        console.log("paper");
        return "paper";
        
    } else if (answer2 === "scissors") {
        console.log("scissors");
        return "scissors";
        
    } else { 
        alert("?? Please spell your choice correctly in lowercase and no spaces");
        return getHumanChoice();
    }
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors.");
            humanScore ++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
    } else if (humanChoice === "paper" && computerChoice ==="rock") {
            console.log("You win! Paper beats Rock.");
            humanScore ++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats Paper.");
            humanScore ++;
    } else if (humanChoice === "scissors" && computerChoice === "rock")  {
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
    } else {
        console.log("You tied with the computer!")
    }
    }

    
    

    function playGame() {
        for(let i = 0; i < 5; i++) {
            playRound(getHumanChoice(), getComputerChoice());
            console.log("Human Score is: " + humanScore);
            console.log("Computer Score is: " + computerScore);
        }
        if (humanScore > computerScore) {
            console.log("You won!");
        } else if (computerScore > humanScore) {
            console.log("You lost!");
        } else {
            console.log("You tied with the computer!");
        }
    }

    playGame();