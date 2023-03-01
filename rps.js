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
    const result = playRound(playerSelection, computerSelection);
    // update score function
});

paperBtn.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerChoice = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    // update score function
});

scissorsBtn.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerChoice = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    // update score function
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound (playerSelection, computerSelection) {
    let result;
    if (playerSelection === computerSelection) {
        result = 'tie';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        result = 'player';
    } else {
        result = 'computer';
    }
    return result;
}

// update score function


