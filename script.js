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

console.log(getComputerChoice());

// use math.random to return a number between 0 and 1
// if number is less than or equal to 0.33: return Rock
// elif number is greater than 0.33 and less than or equal to 0.66: return Scissors
// else: return Paper
