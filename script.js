const prompt = require("prompt-sync")({ sigint: true });

function getComputerChoice() {
  let choice = Math.random();
  if (choice <= 0.33) {
    return "Rock";
  } else if (choice < 0.66) {
    return "Scissors";
  } else {
    return "Paper";
  }
}
function getHumanChoice() {
  let choice = prompt("Please enter a choice from [Rock, Paper, Scissors]: ");
  return choice;
}

let humanScore = 0;
let computerScore = 0;
