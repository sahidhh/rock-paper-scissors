function getComputerChoice() {
  let randomNum = Math.round((Math.random() * 10) / 3);
  let choice;

  if (randomNum === 1) choice = "rock";
  else if (randomNum === 2) choice = "paper";
  else choice = "scissor";

  console.log(choice);
  return choice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  let winner = -1;

  if (playerSelection === "rock" && computerSelection === "rock") winner = 0;
  else if (playerSelection === "rock" && computerSelection === "paper")
    winner = 2;
  else if (playerSelection === "rock" && computerSelection === "scissor")
    winner = 1;
  else if (playerSelection === "paper" && computerSelection === "rock")
    winner = 1;
  else if (playerSelection === "paper" && computerSelection === "paper")
    winner = 0;
  else if (playerSelection === "paper" && computerSelection === "scissor")
    winner = 2;
  else if (playerSelection === "scissor" && computerSelection === "rock")
    winner = 2;
  else if (playerSelection === "scissor" && computerSelection === "paper")
    winner = 1;
  else if (playerSelection === "scissor" && computerSelection === "scissor")
    winner = 0;

  if (winner === 1) {
    return `You Won! ${playerSelection} beats ${computerSelection} ${playGame(1)}`;
  }
  if (winner === 2) {
    return `You Lose! ${computerSelection} beats ${playerSelection} ${playGame(2)}`;
  }

  return `It's a Draw ${playGame(0)}`;
}

function winnerOfTheRound() {
  let choice = prompt("Enter your choice");
  console.log(playRound(choice, getComputerChoice()));
}

let player = 0;
let computer = 0;

function playGame(winner) {
    if(winner === 1) player++;
    else if (winner === 2) computer++;

    if(player === 5 || computer === 5)
    {
        let winnerOfTheGame = player === 5 ? ' You Won the Game' : ' You Lost the Game';
        player = 0;
        computer = 0;

        return winnerOfTheGame;
    }

    return player + ' - ' + computer;
}
