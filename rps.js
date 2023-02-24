// Game logic
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

const choices = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  } 
let computerSelection = getComputerChoice();
// console.log(computerSelection);


 function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'Tie';
    }
    if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        roundWinner = 'player';
    }
    if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
    ) {
        computerScore++;
        roundWinner = 'computer';
    }
    return roundWinner;
 };

console.log(playRound('paper', getComputerChoice()));



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


// UI