// intialise variables
let humanScore = 0;
let computerScore = 0;

startGame();
showWinner();


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
      console.log(`You Scored ${humanChoice} beats ${computerChoice}`);
    }
    else {
      computerScore++
      console.log(`You Lost ${computerChoice} beats ${humanChoice}`);
    }
  }

  else if (humanChoice === 'paper') {
    if (computerChoice === 'rock') {
      humanScore++
      console.log(`You Scored ${humanChoice} beats ${computerChoice}`);
    }
    else {
      computerScore++
      console.log(`You Scored ${computerChoice} beats ${humanChoice}`);
    }
  }

  else if (humanChoice === 'scissors') {
    if (computerChoice === 'paper') {
      humanScore++
      console.log(`You Scored ${humanChoice} beats ${computerChoice}`);
    }
    else {
      computerScore++
      console.log(`You Lose ${computerChoice} beats ${humanChoice}`);
    }
  }

  else {
    //if wrong input, play again
    alert (`${humanChoice} is not allowed,Enter Rock,Paper,or Scissors`);
    return continueGame();
  }
}


function showWinner() {
  if(humanScore > computerScore) {
    alert(`You won ${humanScore} to ${computerScore}`);
  }
  else if(humanScore === computerScore) {
    alert(`You lost ${computerScore} to ${humanScore}`);
  }
  else {
    alert('tie');
  }
}
