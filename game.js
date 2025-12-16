let humanScore = 0;
let computerScore = 0;

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

const getHumanChoice = () => {
  let choice = prompt("Enter rock, paper, or scissors: ").toLowerCase();
  return choice;
};

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    humanScore++;
    computerScore++;
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

const playGame = () => {
  for (let round = 1; round <= 5; round++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(`Round ${round}:`);
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    console.log(playRound(humanChoice, computerChoice));
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    console.log("-------------------------");
  }

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Sorry! The computer won the game.");
  } else {
    console.log("The game is a tie!");
  }
};

let ready;

do {
  ready = prompt("Ready to play? Yes or no?").toLowerCase();
} while (ready !== "yes");

playGame();
