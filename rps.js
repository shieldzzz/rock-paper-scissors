const choices = ['rock', 'paper', 'scissors'];

function game() {
playRound();

}

function playRound() {
    const playerSelection = playerChoice();
    const compSelection = computerChoice();
}

function playerChoice() {
    let input = prompt("Type Rock, Paper, Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    if (check == true) {
    console.log(input);
    }
}

function computerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function validateInput(choice) {
    if(choices.includes(choice)) {
        return true;
    }
        return false;    
}

game ();