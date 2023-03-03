const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const resultText = document.getElementById('resultText');
const playerScoreText = document.getElementById('playerScore');
const computerScoreText = document.getElementById('computerScore');
const playAgainBtn = document.getElementById('playAgainBtn');

let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateUI(result);
});

paperBtn.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateUI(result);
});

scissorsBtn.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateUI(result);
});

playAgainBtn.addEventListener('click', () => {
    resetGame();
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

function updateUI(result) {
    if (result === 'tie') {
        resultText.textContent = 'It\'s a Tie!';
    } else if (result === 'player') {
        resultText.textContent = 'You Win!';
        playerScore++;
    } else {
        resultText.textContent = 'Computer Wins';
        computerScore++;
    }
    playerScoreText.textContent = `Player: ${playerScore}`;
    computerScoreText.textContent = `Computer: ${computerScore}`;

    if (playerScore === 5) {
        resultText.textContent = 'You win the game!';
        disableBtns();
        playAgainBtn.style.display = 'block';
    } else if (computerScore === 5) {
        resultText.textContent = 'Computer wins the game!';
        disableBtns();
        playAgainBtn.style.display = 'block';
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = `Player: ${playerScore}`;
    computerScoreText.textContent = `Computer: ${computerScore}`;
    enableBtns();
    playAgainBtn.style.display = 'none';
}

function disableBtns() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function enableBtns() {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}

