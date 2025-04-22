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
    const resultDiv = document.getElementById("result");

    let result = `your choice: ${humanChoice}<br>Computer's choice: ${computerchoice}<br>`;

    if(humanChoice === computerchoice){
        result +=`it's a tie! both choice ${humanChoice}.`;
    }else if(
        (humanChoice === 'rock' && computerchoice === 'scissors') ||
        (humanChoice === 'scissors' && computerchoice === 'paper') ||
        (humanChoice === 'paper' && computerchoice === 'rock')
    ){
        result +=`you win! ${humanChoice} beats ${computerchoice}.`;
    }else{
        result += `you lose! ${computerchoice}  beats ${humanChoice}.`;
    }

    resultDiv.innerHTML = result;
}

document.getElementById("rock").addEventListener("click", () => {playRound("rock", getComputerChoice());});
document.getElementById("paper").addEventListener("click", () => {playRound("paper", getComputerChoice());});
document.getElementById("scissors").addEventListener("click", () => {playRound("scissors", getComputerChoice());});