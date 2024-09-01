let options = ['rock','paper','scissors']
let Round = 5;

playGame();

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for(let i=0; i<Round;i++) {
    playRound();
  }

  if(humanScore === computerScore) {
    alert("human Won");
  }
  else if(humanScore > computerScore) {
    alert(`You Won ${humanScore} to ${computerScore}`);
  }
  else {
    alert(`You Lost ${computerScore} to ${humanScore}`);
  }


function playRound() {
  let humanChoice = ''
  let firstTry = true;
  let promptMsg = 'Rock,Paper,Scissors Shoot!'

  while(!options.includes(humanChoice)) {
    firstTry = false;
    if(!firstTry) {
      promptMsg = 'Enter valid input : Rock,Paper,Scissors'
    }
    humanChoice = getHumanChoice(promptMsg);
  }

  let computerChoice = getComputerChoice();

  getWinner(humanChoice,computerChoice);
}

function getHumanChoice(promptMsg) {
  return prompt(promptMsg).toLowerCase();
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random()*3)
  return options[randomIndex];
}

function getWinner(...choices) {
  let winCases = [
		   ['rock','scissors'],
		   ['scissors','paper'],
		   ['paper','rock']
		  ];
  let won = winCases.some(winCase => {
     return winCase.every( (value,index) => {
     return value === choices[index] ;
     });
  });

  if(choices[0]===choices[1]) {
    alert("Tie!");
  }
  else if(won) {
    humanScore++
    alert(`You Won ! ,${choices[0]} beats ${choices[1]}`)
  }
  else {
    computerScore++
    alert(`You Lost! ${choices[1]} beats ${choices[0]}`);
  }
}

}
