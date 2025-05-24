// Create a game of Rock, Paper, Scissors that takes a user input choice
// Generates a random choice from a computer opponent
// Compares the two inputs and declares a winner
// Increments the score for the winner
// Declares a winner at the end of the game

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

function playGame () {

    let humanScore = 0
    let computerScore = 0

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

    for (let round = 0; round < 5; round++) {
        var humanSelection = getHumanChoice();
        var computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection)
            console.log("Human Score ", humanScore)
            console.log("Computer Score ", computerScore);
    }

    if (humanScore > computerScore) {
        console.log("You are the winner!")
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost.")
    } else
        console.log("You tied! Better luck next time.")
}

playGame()