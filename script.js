// testing
playGame();

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
  choice = window.prompt("Rock, paper, scissors, shoot!");
  
  // normalize to lowercase
  choice = choice.toLowerCase();

  return choice;
}

function playGame() {
  // score variables
  let humanScore = 0;
  let computerScore = 0; 
  let winner = "";
  let round = 1;

  // loop to play 5 rounds
  for (round = 1; round <= 5; round++) {playRound();}  
  
  // decide winner by comparing scores
  if (humanScore > computerScore) {winner = "you";}
  else if (computerScore > humanScore) {winner = "computer";}
  else if (computerScore === humanScore) {winner = "none"}
  else {console.log("Error determining the winner of the set.")}
  
  // display final score/winner
  console.log("score (you-cpu): " + humanScore + "-" + computerScore);
  console.log("winner: " + winner + "!");

  // function: play one round, compare choices & increment winner score
  function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    // compare choices to decide winner
    if (humanChoice === computerChoice) {
      console.log("Round " + round + ": " + "You tied. You and computer both chose " + humanChoice + ".");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors" ||
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