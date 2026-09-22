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

const humanSelect = getHumanChoice();
const computerSelect = getComputerChoice();

const rockButton = document.querySelector("#rock-button");

rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice);
});

const paperButton = document.querySelector("#paper-button");
paperButton.addEventListener("click", () =>
  playRound("paper", getComputerChoice),
);

const scissorsButton = document.querySelector("#scissors-button");
scissorsButton.addEventListener("click");
