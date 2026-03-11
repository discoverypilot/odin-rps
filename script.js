// score variables
let humanScore = 0;
let computerScore = 0; 

// testing
console.log(getHumanChoice());
console.log(getComputerChoice());

// return random value of rock, paper, or scissors
function getComputerChoice() {
  let randomNumber = Math.floor((Math.random()*3) + 1); // random number btwn 1-3
  let choice = "";

  // decide computer's move by random number result
  switch (randomNumber) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
      break;
    default:
      console.log("Error: randomNumber outside expected range.");
  }
  return choice;
}

// prompt user for input & return input (assumes all inputs are valid)
function getHumanChoice() {
  let choice = "";

  // prompt user
  choice = window.prompt("rock, paper, or scissors?");

  return choice;
}