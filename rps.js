// Game logic
let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let roundWinner = '';

const choices = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

let computerSelection = getComputerChoice();

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'Tie';
    }
    if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        roundWinner = 'player';
    }
    if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
    ) {
        roundWinner = 'computer';
    }
    return updateScore();
}

function updateScore() {
    playRound(playerSelection, computerSelection);
    if (roundWinner.includes('player')) {
        playerScore++;
    } else if (roundWinner.includes('computer')) {
        computerScore++;
    }
    return {playerScore, computerScore}
}


//  console.log(playRound('rock', getComputerChoice()));

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    playerSelection = 'rock';
});



const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');


// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt('Choose Rock, Paper, or Scissors').toLowerCase();
//         let computerSelection = getComputerChoice();
//         let roundResult = playRound(playerSelection, computerSelection);
//         console.log(roundResult);
//         if (roundResult.includes('Win')) {
//             playerScore++;
//         } else if (roundResult.includes('Lose')) {
//             computerScore++;
//         }
//     }
//     if (playerScore > computerScore) {
//         console.log('You win the game! \nPlayer Score: ' + playerScore + ' \nComputer Score: ' + computerScore);
//     } else if (playerScore < computerScore) {
//         console.log('You lose the game! \nPlayer Score: ' + playerScore + ' \nComputer Score: ' + computerScore);
//     } else {
//         console.log('It\'s a tie game! \nPlayer Score: ' + playerScore + ' \nComputer Score: ' + computerScore);
//     }
// }

// game();
