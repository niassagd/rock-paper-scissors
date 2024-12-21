let computerChoice;
let humanChoice;

//Computer chooses rock, paper, or scissors string when function is run
function getComputerChoice() {
    let numChoice = Math.floor(Math.random()*3);
        console.log(numChoice); 
    if (numChoice === 2) {
        computerChoice = "rock";
    } else if (numChoice === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log(computerChoice);
}
//Human choose rock, paper, or scissors
function getHumanChoice() {
    let answer = prompt("Enter one option: rock, paper, scissors", "");
    let answer2 = answer.toLowerCase();
    if (answer2 === "rock") {
        humanChoice = "rock";
    } else if (answer2 === "paper") {
        humanChoice = "paper";
    } else if (answer2 = "scissors") {
        humanChoice = "scissors";
    } else { 
        alert("?? Please spell your choice correctly in lowercase and no spaces");
        return getHumanChoice();
    }
    console.log(humanChoice);
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie! You both choose " + computerChoice +".");
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors.");
        } else {
            console.log("You lose! Paper beats Rock.");
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock.");
        } else {
            console.log("You lose! Scissors beats Paper.");
        }
    } else {
        if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper.");
        } else if (computerChoice === "scissors") {
            console.log("You lose! Rock beats Scissors.");
        }
    }
}
