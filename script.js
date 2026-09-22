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
    return humanScore;
  } else {
    computerScore++;
    return computerScore;
  }
  return;
}
let computerSelect = getComputerChoice();

const rockButton = document.querySelector("#rock-button");

rockButton.addEventListener("click", (e) => {
  playRound("rock", getComputerChoice());
  const humanScoreDiv = document.querySelector("#human-score");
  humanScoreDiv.textContent = `${humanScore}`;

  const computerScoreDiv = document.querySelector("#computer-score");
  computerScoreDiv.textContent = `${computerScore}`;
});

const paperButton = document.querySelector("#paper-button");
paperButton.addEventListener("click", () => playRound("paper", computerSelect));

const scissorsButton = document.querySelector("#scissors-button");
scissorsButton.addEventListener("click");
