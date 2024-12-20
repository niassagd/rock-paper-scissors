
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
