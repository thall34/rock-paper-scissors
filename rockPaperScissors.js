// Create a game of Rock, Paper, Scissors that takes a user input choice
// Generates a random choice from a computer opponent
// Compares the two inputs and declares a winner
// Increments the score for the winner

let humanScore = 0
let computerScore = 0

function getComputerChoice () {
    const randomInt = Math.random()
        if (randomInt <= 0.33)  {
            return "rock"
        } else if (randomInt >= 0.67) {
            return "paper"
        } else return "scissors"
}

function getHumanChoice () {
    let string = prompt("Choose either Rock, Paper or Scissors", "")
    return string.toLowerCase()
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors!");
        humanScore++
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper!");
        humanScore++
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock!");
        humanScore++
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock!");
        computerScore++
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper!");
        computerScore++
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors!");
        computerScore++
    } else
        console.log("You are equally matched! No Points")
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)
console.log("Human Score ", humanScore)
console.log("Computer Score ", computerScore)