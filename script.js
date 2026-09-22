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
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", (e) => {
    console.log(e.target.value);
    const choice = e.target.value;
    playRound(choice, getComputerChoice());
    const humanScoreDiv = document.querySelector("#human-score");
    humanScoreDiv.textContent = `${humanScore}`;

    const computerScoreDiv = document.querySelector("#computer-score");
    computerScoreDiv.textContent = `${computerScore}`;

    let winner = document.querySelector("h1");
    if (humanScore === 5) {
      winner.textContent = `Winner is Human!!`;
    } else if (computerScore === 5) {
      winner.textContent = "Winner is Computer";
    }
  });
}
