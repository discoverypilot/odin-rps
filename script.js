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

/* ---------------- TESTING ------------------ */
// playGame();

/* ---------- CREATE DOM ELEMENTS ------------ */
const gameWindow = document.querySelector('#gameWindow');

const moveSelectBox = document.createElement('div');
moveSelectBox.setAttribute("id", "move");

const moveSelectText = document.createElement('p');
moveSelectText.textContent = "Make your move:";

const buttonsBox = document.createElement('div');
buttonsBox.setAttribute("id", "buttons");

const rockBtn = document.createElement('button');
rockBtn.textContent = "ROCK";
rockBtn.setAttribute("id", "rockBtn");
const paperBtn = document.createElement('button');
paperBtn.textContent = "PAPER";
paperBtn.setAttribute("id", "paperBtn");
const scissorsBtn = document.createElement('button');
scissorsBtn.textContent = "SCISSORS";
scissorsBtn.setAttribute("id", "scissorsBtn");

const rockIcon = document.createElement('img');
rockIcon.setAttribute("src", "resources/rock.png");
rockIcon.setAttribute("alt", "");
rockIcon.setAttribute("class", "rockIcon");
const paperIcon = document.createElement('img');
paperIcon.setAttribute("src", "resources/paper.png");
paperIcon.setAttribute("alt", "");
paperIcon.setAttribute("class", "paperIcon");
const scissorsIcon = document.createElement('img');
scissorsIcon.setAttribute("src", "resources/scissors.png");
scissorsIcon.setAttribute("alt", "");
scissorsIcon.setAttribute("class", "scissorsIcon");

const resultsBox = document.createElement('div');
resultsBox.setAttribute("id", "results");

const playerChoicePara = document.createElement('p');
const playerChoiceSpan = document.createElement('span');
const playerChoiceIcon = document.createElement('img');
playerChoiceIcon.setAttribute("alt", "");

const computerChoicePara = document.createElement('p');
const computerChoiceSpan = document.createElement('span');
const computerChoiceIcon = document.createElement('img');
computerChoiceIcon.setAttribute("alt", "");

const scoreBox = document.createElement('div');
scoreBox.setAttribute("id", "score");
const playerScoreText = document.createElement('p');
const computerScoreText = document.createElement('p');

const winnerText = document.createElement('p');
const retryBtn = document.createElement('button');
retryBtn.setAttribute("id", "retry");
retryBtn.textContent = "RETRY";
const retryImg = document.createElement('img');
retryImg.setAttribute("src", "resources/retry.png");
retryImg.setAttribute("alt", "");
retryImg.setAttribute("id", "retryImg");

/* ---------- DOM PARENTING TEST ZONE ------------ */

// choice buttons
rockBtn.appendChild(rockIcon);
paperBtn.appendChild(paperIcon);
scissorsBtn.appendChild(scissorsIcon);

buttonsBox.appendChild(rockBtn);
buttonsBox.appendChild(paperBtn);
buttonsBox.appendChild(scissorsBtn);

moveSelectBox.appendChild(moveSelectText);
moveSelectBox.appendChild(buttonsBox);

gameWindow.appendChild(moveSelectBox);

// results
playerChoicePara.textContent = "Your choice: ";
computerChoicePara.textContent = "Computer's choice: ";

resultsBox.appendChild(playerChoicePara);
resultsBox.appendChild(computerChoicePara);

gameWindow.appendChild(resultsBox);

// score
playerScoreText.textContent = "Your score: ";
computerScoreText.textContent = "Computer's score: ";
winnerText.textContent = "Winner: you!";
scoreBox.appendChild(playerScoreText);
scoreBox.appendChild(computerScoreText);
scoreBox.appendChild(winnerText);

retryBtn.appendChild(retryImg);
scoreBox.appendChild(retryBtn);

gameWindow.appendChild(scoreBox);

/* --------------- HANDLE CLICKS ---------------- */

// commenting out all of this to just focus on the DOM for now
/*

gameWindow.addEventListener('click', (Event) => {
  Event.preventDefault();
  let target = Event.target;
  let choice = -1;

  switch(target.id) {
    case 'btnRock':
      choice = 0;
      break;
    case 'btnPaper':
      choice = 1;
      break;
    case 'btnScissors':
      choice = 2;
      break;
  }
  console.log(choice);
});

/* --------------- GAME LOGIC ---------------- */ /*
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

*/