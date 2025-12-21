let humanScore = 0;
let computerScore = 0;
let round = 0;
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const statusText = document.getElementById("status");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const roundStatus = document.getElementById("round");
const rpsBtns = document.querySelectorAll(".choice");
const humanScoreText = document.getElementById("human-score");
const computerScoreText = document.getElementById("computer-score");

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const playRound = (humanChoice, computerChoice) => {
  endRound();

  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanScore++;
      return "You win! Rock beats Scissors.";
    } else {
      computerScore++;
      return "You lose! Paper beats Rock.";
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      return "You win! Paper beats Rock.";
    } else {
      computerScore++;
      return "You lose! Scissors beats Paper.";
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      humanScore++;
      return "You win! Scissors beats Paper.";
    } else {
      computerScore++;
      return "You lose! Rock beats Scissors.";
    }
  } else {
    return "Invalid choice. Please choose rock, paper, or scissors.";
  }
};

const handleClick = (b) => {
  const computerChoice = getComputerChoice();
  statusText.textContent = playRound(b.id, computerChoice);
  humanScoreText.textContent = `Human: ${humanScore}`;
  computerScoreText.textContent = `Computer: ${computerScore}`;
  checkScore();
};

const checkScore = () => {
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      statusText.textContent = "Congratulations! You won the game!";
      endGame();
    } else {
      statusText.textContent = "Sorry! The computer won the game.";
      endGame();
    }
  }
};

const startGame = () => {
  humanScore = 0;
  computerScore = 0;
  round = 0;

  playBtn.classList.add("hidden");
  roundStatus.classList.remove("hidden");
  statusText.classList.remove("hidden");
  humanScoreText.classList.remove("hidden");
  computerScoreText.classList.remove("hidden");
  roundStatus.textContent = `Round ${round}`;
  humanScoreText.textContent = `Human: ${humanScore}`;
  computerScoreText.textContent = `Computer: ${computerScore}`;

  nextRound();
};

const nextRound = () => {
  rockBtn.classList.remove("hidden");
  paperBtn.classList.remove("hidden");
  scissorsBtn.classList.remove("hidden");
  nextBtn.classList.add("hidden");
  round++;
  roundStatus.textContent = `Round: ${round}`;
  statusText.textContent = "make your choice";
};

const endRound = () => {
  rockBtn.classList.add("hidden");
  paperBtn.classList.add("hidden");
  scissorsBtn.classList.add("hidden");
  nextBtn.classList.remove("hidden");
};

const endGame = () => {
  rockBtn.classList.add("hidden");
  paperBtn.classList.add("hidden");
  scissorsBtn.classList.add("hidden");
  nextBtn.classList.add("hidden");
  humanScoreText.classList.remove("hidden");
  computerScoreText.classList.remove("hidden");
  roundStatus.classList.add("hidden");
  playBtn.textContent = "play again";
  playBtn.classList.remove("hidden");
};
rpsBtns.forEach((btn) => {
  btn.addEventListener("click", () => handleClick(btn));
});

playBtn.addEventListener("click", () => {
  startGame();
});

nextBtn.addEventListener("click", () => {
  nextRound();
});
