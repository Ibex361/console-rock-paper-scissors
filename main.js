// intialise variables
let humanScore = 0;
let computerScore = 0;

startGame();

//define startgame here
function startGame() {
// each game has five rounds unless quited
  for (let i = 1; i <= 5; i++) {
    if (continueGame() === 'quit') {
      break;
    }
  }

}

// a function to continue or quit the game as user wants
function continueGame() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  // user quitted,comply!
  if (humanChoice === 'quit') {
    console.log("You quited!")
    return "quit"
  }
  // otherewise continue the game
  return playRound(humanChoice, computerChoice);
}

// functions to get user input

function getComputerChoice() {
  let randomNo = Math.floor(Math.random() * 3);

  if (randomNo === 0) {
    return 'rock';
  }
  else if (randomNo == 1) {
    return 'paper';
  }
  else {
    return 'scissors';
  }
}

function getHumanChoice() {
  return prompt("Shoot ! ").toLowerCase();
}


// here is the rule for each round
function playRound(humanChoice, computerChoice) {

  if (humanChoice === computerChoice) {
    console.log("Tie!");
  }
  else if (humanChoice === 'rock') {
    if (computerChoice === 'scissors') {
      humanScore++
      console.log(`You Won ${humanChoice} beats ${computerChoice}`);
    }
    else {
      computerScore++
      console.log(`You Lose ${computerChoice} beats ${humanChoice}`);
    }
  }

  else if (humanChoice === 'paper') {
    if (computerChoice === 'rock') {
      humanScore++
      console.log(`You Won ${humanChoice} beats ${computerChoice}`);
    }
    else {
      computerScore++
      console.log(`You Lose ${computerChoice} beats ${humanChoice}`);
    }
  }

  else if (humanChoice === 'scissors') {
    if (computerChoice === 'paper') {
      humanScore++
      console.log(`You Won ${humanChoice} beats ${computerChoice}`);
    }
    else {
      computerScore++
      console.log(`You Lose ${computerChoice} beats ${humanChoice}`);
    }
  }

  else {
    //if wrong input, play again
    console.log(`${humanChoice} is not allowed,Enter Rock,Paper,or Scissors`);
    return continueGame();
  }
}
