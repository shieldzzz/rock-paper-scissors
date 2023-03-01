const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const resultText = document.getElementById('resultText');
const playerScoreText = document.getElementById('playerScore');
const computerScoreText = document.getElementById('computerScore');

let playerScore = 0;
let computerScore = 0;

// Buttons
rockBtn.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerChoice = getComputerChoice();

});




function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}






// function playRound (playerSelection, computerSelection) {
//     if (playerSelection === computerSelection) {
//         roundWinner = 'Tie';
//     }
//     if (
//     (playerSelection === 'rock' && computerSelection === 'scissors') ||
//     (playerSelection === 'paper' && computerSelection === 'rock') ||
//     (playerSelection === 'scissors' && computerSelection === 'paper')
//     ) {
//         roundWinner = 'player';
//     }
//     if (
//     (playerSelection === 'rock' && computerSelection === 'paper') ||
//     (playerSelection === 'paper' && computerSelection === 'scissors') ||
//     (playerSelection === 'scissors' && computerSelection === 'rock')
//     ) {
//         roundWinner = 'computer';
//     }
//     return updateScore();
// }


