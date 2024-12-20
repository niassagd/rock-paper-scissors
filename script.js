
//Computer chooses rock, paper, or scissors string every time function is run
function getComputerChoice() {
    let rock = 0;
    let paper = 1;
    let scissors = 2;
    let numChoice = Math.floor(Math.random()*3);
        console.log(numChoice);
    if (numChoice === 2) {
        compChoice = "rock";
    } else if (numChoice === 1) {
        compChoice = "paper";
    } else {
        compChoice = "scissors";
            
    }
    console.log(compChoice);
}
//Human choose rock, paper, or scissors
function getHumanChoice() {
    let humanChoiceMade = false;
    let humanChoice = prompt("Enter one option: rock, paper, scissors", "");
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        humanChoiceMade = true;
        console.log(humanChoiceMade);
        console.log(humanChoice);
    } else {
        alert("?? Please spell your choice correctly in lowercase and no spaces");
        humanChoiceMade = false;
        console.log(humanChoiceMade);
        console.log(humanChoice);
        getHumanChoice();
    }
    }
    
