let finalRound = 5;

let humanScore = 0;
let computerScore = 0;
let currentRound = 0;
const ONE_SEC = '1000';

setButtons();

function setButtons() {
  const showDiv = document.body.querySelector('.show-div');
  if (showDiv) {
    showDiv.remove();
  }

  const btnDiv = document.createElement('div');
  const inDiv = document.createElement('div');
  const btnRock = document.createElement('button');
  const btnPaper = document.createElement('button');
  const btnScissors = document.createElement('button');
  const computerChoiceDiv = document.createElement('p');

  btnRock.textContent = 'rock';
  btnPaper.textContent = 'paper';
  btnScissors.textContent = 'scissors';
  computerChoiceDiv.textContent = 'computer'

  inDiv.appendChild(btnRock);
  inDiv.appendChild(btnPaper);
  inDiv.appendChild(btnScissors);
  btnDiv.appendChild(inDiv);
  btnDiv.insertBefore(computerChoiceDiv, btnDiv.firstChild);
  document.body.appendChild(btnDiv);

  btnDiv.classList.add('btn-container');
  const buttons = btnDiv.querySelectorAll('button');
  buttons.forEach((button) => {
    button.classList.add('option-btn');
  });
  btnDiv.addEventListener('click', showRoundResult);
  return btnDiv;

}

function showRoundResult(event) {
  currentRound++;

  const humanChoice = event.target.textContent;
  const computerChoice = getComputerChoice();
  const computerChoiceDiv = document.querySelector('p');
  const btnDiv = document.querySelector('.btn-container');
  computerChoiceDiv.textContent = computerChoice;

  setTimeout(next, ONE_SEC);

  function next() {
    btnDiv.remove()
    const showDiv = document.createElement('div');
    showDiv.classList.add('show-div');
    showDiv.textContent = getWinner(humanChoice, computerChoice);

    document.body.appendChild(showDiv);
    console.log(currentRound);
    if (currentRound != finalRound) {
      setTimeout(setButtons, ONE_SEC);
    }
    else {
      setTimeout(showFinalResult, ONE_SEC);
    }
  }
}

function showFinalResult() {
  const showDiv = document.body.querySelector('.show-div');
  const finalDiv = document.createElement('div');
  finalDiv.classList.add('final-div');

  showDiv.remove();

  if (humanScore === computerScore) {
    finalDiv.textContent = `Tie ${humanScore} to ${computerScore}`;
  }
  else if (humanScore > computerScore) {
    finalDiv.textContent = `You Won ${humanScore} to ${computerScore}`;
  }
  else {
    finalDiv.textContent = `You Lost ${computerScore} to ${humanScore}`;
  }
  document.body.appendChild(finalDiv);
  const playAgainBtn = document.createElement('button');
  playAgainBtn.textContent = 'Play Again';
  playAgainBtn.classList.add('again-btn');
  finalDiv.appendChild(playAgainBtn);

  playAgainBtn.addEventListener('click', () => {
    finalDiv.remove();
    // delete history
    humanScore = 0;
    computerScore = 0;
    currentRound = 0;

    setButtons();
  });
}


function getComputerChoice() {
  let options = ['rock', 'paper', 'scissors']
  const randomIndex = Math.floor(Math.random() * 3)
  return options[randomIndex];
}


function getWinner(...choices) {

  let winCases = [
    ['rock', 'scissors'],
    ['scissors', 'paper'],
    ['paper', 'rock']
  ];
  let won = winCases.some(winCase => {
    return winCase.every((value, index) => {
      return value === choices[index];
    });
  });

  if (choices[0] === choices[1]) {
    return "Tie!";
  }
  else if (won) {
    humanScore++
    return `You Won ! ,${choices[0]} beats ${choices[1]}`;
  }
  else {
    computerScore++
    return `You Lost! ${choices[1]} beats ${choices[0]}`;
  }
}
