
let computerChoice;


//Computer chooses rock, paper, or scissors string every time function is run
function getComputerChoice() {
    let rock = 0;
    let paper = 1;
    let scissors = 2;
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
    let humanChoiceMade = false;
    let answer = prompt("Enter one option: rock, paper, scissors", "");
    let humanChoice = answer.toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        humanChoiceMade = true;
    } else {
        alert("?? Please spell your choice correctly in lowercase and no spaces");
        humanChoiceMade = false;
        console.log(humanChoiceMade);
        return getHumanChoice();
    }
    console.log(humanChoiceMade);
    console.log(humanChoice);
    return humanChoice;
}

let humanChoice = getHumanChoice();
    
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie! You both choose " + computerChoice +".")
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors.");
        } else {
            console.log("You lose! Paper beats Rock.");
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock.")
        } else {
            console.log("You lose! Scissors beats Paper")
        }
    } else {
        if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper.")
        } else {
            console.log("You lose! Rock beats Scissors.")
        }
    }
}