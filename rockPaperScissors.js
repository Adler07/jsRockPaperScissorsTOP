// function that will randomly pick "Rock","Paper" or "Scissors" for the computer

function getComputerChoice() {
    const choices = ["rock","paper","scissors"];
    // get random index value, Math.random = num between 0 and 1
    // rounded to lowest and then multiplied by 3
    const randomIndex = Math.floor(Math.random()* choices.length );
    // get random item
    const computerChoice = choices[randomIndex];
    return computerChoice;

}

//will only play a round of Rock Paper Scissors and either "You win" or "You lose"

/*function playRound(playerSelection,computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors"){
        return 
    } 
}*/

const playerSelection = prompt("Rock, paper or scissors ? : ").toLowerCase();
const computerSelection = getComputerChoice();
console.log(computerSelection)
console.log(playRound(playerSelection,computerSelection));
