// testing
playGame();

function getComputerChoice() {
  let randomNumber = Math.floor((Math.random()*3));
  let choice = "";

  switch (randomNumber) {
    case 0:
      choice = "rock";
      break;
    case 1:
      choice = "paper";
      break;
    case 2:
      choice = "scissors";
      break;
    default:
      console.log("Error: RPS choice outside expected range.");
  }
  return choice;
}

// assumes all inputs are valid; fine for button press
function getHumanChoice() {
  let choice = "";
  choice = window.prompt("Rock, paper, scissors, shoot!");
  choice = choice.toLowerCase();
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0; 
  let winner = "";
  let round = 1;
  
  // (loop goes here: loop until one score reaches 5)

  function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" || 
            humanChoice === "scissors" && computerChoice === "paper") {
      console.log("Round " + round + ": " + "You win! Your " + humanChoice + " beats computer's " + computerChoice + ".");
      humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "scissors" || 
            humanChoice === "scissors" && computerChoice === "rock") {
      console.log("Round " + round + ": " + "You lose. Computer's " + computerChoice + " beats your " + humanChoice + ".");
      computerScore++;
    }
    else {
      console.log("Error deciding a winner.");
    }
  }
}