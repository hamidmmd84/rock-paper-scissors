function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() *3 );
    return choices[randomIndex];
}

function getHumanChoice(){
    let userChoice = prompt("Enter your choice(rock, paper, scissors):").toLowerCase();
    return userChoice;
}

function playRound(humanChoice, computerchoice){
    console.log("your choice: "+humanChoice);
    console.log("computer's choice: "+computerchoice);

    if(humanChoice === computerchoice){
        console.log("it's a tie! both choice "+humanChoice);
    }else if(
        (humanChoice === 'rock' && computerchoice === 'scissors') ||
        (humanChoice === 'scissors' && computerchoice === 'paper') ||
        (humanChoice === 'paper' && computerchoice === 'rock')
    ){
        console.log("you win! "+humanChoice+ " beats "+computerchoice);
    }else{
        console.log("you lose! "+computerchoice+ " beats "+humanChoice)
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);