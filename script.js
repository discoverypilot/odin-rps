/* 
general outline so my structure isnt ass

game screen:
- title: rock paper scissors
- text: make your move!
- 3 buttons: rock, paper, scissors
  - show on each new round
  - hide after move selection (in eventListener
    switch case)
- round result div
  - show player move, cpu move, result, scores
  - clear at the end of each round
- running score div
  - keep score here
  - when a score reaches 5:
    - announce winner
    - display play again button (refreshes game)
*/

/* ----------------- VARIABLES ------------------ */

const gameWindow = document.querySelector("#gameWindow");

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

let humanChoice = "";
let hasChosenMove = false;

let humanScore = 0;
let computerScore = 0; 
let round = 1;

/* --------------- HANDLE CLICKS ---------------- */

gameWindow.addEventListener('click', (Event) => {
  let target = Event.target;

  if (!hasChosenMove && humanScore < 5 && computerScore < 5) {
    switch(target.id) {
      case 'rockBtn':
        humanChoice = "rock";
        break;
      case 'paperBtn':
        humanChoice = "paper";
        break;
      case 'scissorsBtn':
        humanChoice = "scissors";
        break;
    }
    hasChosenMove = true;
    console.log(humanChoice);
    playRound(humanChoice);
    }

  switch(target.id) {
    case 'retryBtn':
      // restart game
      break;
    }
});

/* --------------- GAME LOGIC ---------------- */
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
  }
  return choice;
}

function playRound() {
  let computerChoice = getComputerChoice();

  if (humanChoice == computerChoice) {
    console.log("tie");
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

  hasChosenMove = false;
  humanChoice = "";
  round++;

  if (humanScore == 5) {
    console.log("you win!");
  }
  else if (computerScore == 5) {
    console.log("computer wins!");
  }

  }