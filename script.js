const prompt = require("prompt-sync")({ sigint: true });

function getComputerChoice() {
  let choice = Math.random();
  if (choice <= 0.33) {
    return "rock";
  } else if (choice < 0.66) {
    return "scissors";
  } else {
    return "paper";
  }
}
function getHumanChoice() {
  let choice = prompt("Please enter a choice from [Rock, Paper, Scissors]: ");
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase().trim();
  if (humanChoice === computerChoice) {
    return "Round tie";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
  } else {
    computerScore++;
  }
}
