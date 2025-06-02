// Computer Selection
function getComputerChoice () {
    const randomInt = Math.random()
        if (randomInt <= 0.33)  {
            return "rock";
        } else if (randomInt >= 0.67) {
            return "paper";
        } else return "scissors";
}

// Human Selection
const humanChoiceRock = document.querySelector(".rock");
const humanChoicePaper = document.querySelector(".paper");
const humanChoiceScissors = document.querySelector(".scissors");

humanChoiceRock.addEventListener('click', function() {
    humanSelection = "rock";
    const computerSelection = getComputerChoice();
    playRound (humanSelection, computerSelection);
});
humanChoicePaper.addEventListener('click', function() {
    humanSelection = "paper";
    const computerSelection = getComputerChoice();
    playRound (humanSelection, computerSelection);
});
humanChoiceScissors.addEventListener('click', function() {
    humanSelection = "scissors";
    const computerSelection = getComputerChoice();
    playRound (humanSelection, computerSelection);
});

// Score Reset
let humanScore = 0;
let computerScore = 0;

// Div selection for displaying results and score

const selection = document.querySelector(".selection");
const results = document.querySelector(".results");
const winner = document.querySelector(".winner")
var scoreH = document.querySelector(".scoreH");
var scoreC = document.querySelector(".scoreC");
scoreH.textContent = "Human Score: " + humanScore;
scoreC.textContent = "Computer Score: " + computerScore;

    function playRound (humanChoice, computerChoice) {

        selection.textContent = "You have chosen " + humanChoice + " and the computer has chosen " + computerChoice

        if (humanChoice === "rock" && computerChoice === "scissors") {
            results.textContent = "You win! Rock beats Scissors"
            humanScore++
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            results.textContent = "You win! Scissors beats Paper"
            humanScore++
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            results.textContent = "You win! Paper beats Rock"
            humanScore++
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            results.textContent = "You lose! Paper beats Rock!"
            computerScore++
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            results.textContent = "You lose! Scissors beats Paper!"
            computerScore++
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            results.textContent = "You lose! Rock beats Scissors!"
            computerScore++
        } else {
            results.textContent = "You are equally matched! No Points!"
        }
        scoreH.textContent = "Human Score: " + humanScore;
        scoreC.textContent = "Computer Score: " + computerScore;

        if (humanScore == 5) {
            winner.textContent = "You win the game!"
            winner.className = "win"
            humanChoiceRock.disabled = true
            humanChoicePaper.disabled = true
            humanChoiceScissors.disabled = true
        } else if (computerScore == 5) {
            winner.textContent = "You lose the game!"
            winner.className = "lose"
            humanChoiceRock.disabled = true
            humanChoicePaper.disabled = true
            humanChoiceScissors.disabled = true
        }
    }