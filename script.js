/* ----------------- VARIABLES ------------------ */

const gameWindow = document.querySelector("#gameWindow");

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

const resultsBox = document.createElement("div");
resultsBox.setAttribute("id", "results");
const humanChoicePara = document.createElement("p");
humanChoicePara.textContent = "You chose: ";
const computerChoicePara = document.createElement("p");
computerChoicePara.textContent = "Computer chose: ";
const humanChoiceSpan = document.createElement("span");
const computerChoiceSpan = document.createElement("span");
const roundWinnerPara = document.createElement("p");

humanChoicePara.appendChild(humanChoiceSpan);
computerChoicePara.appendChild(computerChoiceSpan);
resultsBox.appendChild(humanChoicePara);
resultsBox.appendChild(computerChoicePara);
resultsBox.appendChild(roundWinnerPara);

const scoreBox = document.createElement("div");
scoreBox.setAttribute("id", "score");
const scorePara = document.createElement("p");
const gameWinnerPara = document.createElement("p");

scoreBox.appendChild(scorePara);

const retryBtn = document.createElement("button");
retryBtn.setAttribute("id", "retryBtn");
const retryIcon = document.createElement("img");
retryIcon.setAttribute("src", "resources/retry.png");
retryIcon.setAttribute("alt", "");
retryBtn.textContent = "RETRY";
retryBtn.appendChild(retryIcon);

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
    playRound(humanChoice);
    }

  switch(target.id) {
    case 'retryBtn':
      resetGame();
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

  showRoundResults();
  showScore();

  function showRoundResults() {
    switch (humanChoice) {
      case "rock":
        humanChoiceSpan.textContent = "ROCK";
        humanChoiceSpan.setAttribute("class", "rockTxt");
        break;
      case "paper":
        humanChoiceSpan.textContent = "PAPER";
        humanChoiceSpan.setAttribute("class", "paperTxt");
        break;
      case "scissors":
        humanChoiceSpan.textContent = "SCISSORS";
        humanChoiceSpan.setAttribute("class", "scissorsTxt");
        break;
    }

    switch (computerChoice) {
      case "rock":
        computerChoiceSpan.textContent = "ROCK";
        computerChoiceSpan.setAttribute("class", "rockTxt");
        break;
      case "paper":
        computerChoiceSpan.textContent = "PAPER";
        computerChoiceSpan.setAttribute("class", "paperTxt");
        break;
      case "scissors":
        computerChoiceSpan.textContent = "SCISSORS";
        computerChoiceSpan.setAttribute("class", "scissorsTxt");
        break;
    }
    
    if (humanChoice == computerChoice) {
      roundWinnerPara.textContent = "You tied.";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" || 
            humanChoice === "scissors" && computerChoice === "paper") {
      roundWinnerPara.textContent = "You win!";
      humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "scissors" || 
            humanChoice === "scissors" && computerChoice === "rock") {
      roundWinnerPara.textContent = "You lose.";
      computerScore++;
    }
    gameWindow.appendChild(resultsBox);
  }

  function showScore() {
    scorePara.textContent = "Score: " + humanScore + "-" + computerScore;

    if (humanScore == 5) {
      gameWinnerPara.textContent = "You win! Play again?";
      scoreBox.appendChild(gameWinnerPara);
      scoreBox.appendChild(retryBtn);
    }
    else if (computerScore == 5) {
      gameWinnerPara.textContent = "Computer wins! Play again?";
      scoreBox.appendChild(gameWinnerPara);
      scoreBox.appendChild(retryBtn);
    }

    gameWindow.appendChild(scoreBox);
  }

  hasChosenMove = false;
  humanChoice = "";
  round++;
}

function resetGame() {
  humanChoice = "";
  hasChosenMove = false;

  humanScore = 0;
  computerScore = 0; 
  round = 1;

  scoreBox.removeChild(gameWinnerPara);
  scoreBox.removeChild(retryBtn);
  gameWindow.removeChild(resultsBox);
  gameWindow.removeChild(scoreBox);
}