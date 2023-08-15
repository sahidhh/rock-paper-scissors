function getComputerChoice(){
    let randomNum = Math.round((Math.random()*10)/3);
    let choice;

    if(randomNum === 1) choice = 'rock';
    else if(randomNum === 2) choice = 'paper';
    else choice = 'scissor';

    console.log(choice);
    return choice;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let winner = -1;

    if(playerSelection === 'rock' && computerSelection === 'rock') winner = 0;
    else if(playerSelection === 'rock' && computerSelection === 'paper') winner = 2;
    else if(playerSelection === 'rock' && computerSelection === 'scissor') winner = 1;
    else if(playerSelection === 'paper' && computerSelection === 'rock') winner = 1;
    else if(playerSelection === 'paper' && computerSelection === 'paper') winner = 0;
    else if(playerSelection === 'paper' && computerSelection === 'scissor') winner = 2;
    else if(playerSelection === 'scissor' && computerSelection === 'rock') winner = 2;
    else if(playerSelection === 'scissor' && computerSelection === 'paper') winner = 1;
    else if(playerSelection === 'scissor' && computerSelection === 'scissor') winner = 0;

    if(winner === 1) return `You Won! ${playerSelection} beats ${computerSelection}`
    if(winner === 2) return `You Lose! ${computerSelection} beats ${playerSelection}`
    return `It's a Draw`;
}

function winnerOfTheRound(){
    let choice = prompt('Enter your choice');
    console.log(playRound(choice, getComputerChoice()));
}

function playGame(){
    
}