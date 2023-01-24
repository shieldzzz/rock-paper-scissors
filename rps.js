// Function to get the computer selection
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }  
//   console.log(getComputerChoice());

// Function that plays single round of game
function playRound (playerSelection, computerSelection) {
    let result;
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return result = 'It\'s a tie!';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return result = 'You Win! Rock beats Scissors';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') { 
        return result = 'You Lose! Paper beats Rock';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return result = 'You Win! Paper beats Rock';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return result = 'You Lose! Scissors beats Paper';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return result = 'You Win! Scissors beats Paper';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return result = 'You Lose! Rock beats Scissors';
    } else {
        return result = 'Please enter Rock, Paper, or Scissors';
    }
}   
// const playerSelection = 'rock';
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

// game function that calls playRound inside and plays 5 rounds with a for loop
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Choose Rock, Paper, or Scissors').toLowerCase();
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if (roundResult.includes('Win')) {
            playerScore++;
        } else if (roundResult.includes('Lose')) {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log('You win the game! Final score: Player ' + playerScore + ' Computer score: ' + computerScore);
    } else if (playerScore < computerScore) {
        console.log('You lose the game! Final score: Player ' + playerScore + ' Computer score: ' + computerScore);
    } else {
        console.log('It\'s a tie game! Final score: Player ' + playerScore + ' Computer score: ' + computerScore);
    }
}

game();