// score variables
let humanScore = 0;
let computerScore = 0; 

// choice variables
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// testing
playRound(humanSelection, computerSelection);

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
  
  // normalize to lowercase
  choice = choice.toLowerCase();

  return choice;
}

// play a round: compare choices & increment winner score
function playRound(humanChoice, computerChoice) {
  // display choices
  console.log("you: " + humanChoice);
  console.log("computer: " + computerChoice);

  // compare choices to decide winner
  if (humanChoice === computerChoice) {
    console.log("you tied.");
  }
  else if (humanChoice === "rock" && computerChoice === "scissors" ||
           humanChoice === "paper" && computerChoice === "rock" || 
           humanChoice === "scissors" && computerChoice === "paper") {
    console.log("you win!");
    humanScore++;
  }
  else if (humanChoice === "rock" && computerChoice === "paper" ||
           humanChoice === "paper" && computerChoice === "scissors" || 
           humanChoice === "scissors" && computerChoice === "rock") {
    console.log("you lose.");
    computerScore++;
  }
  else {
    console.log("Error deciding a winner.");
  }
}