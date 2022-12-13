alert("we are playing a rock/paper/scissors game");

const btn = document.querySelectorAll(".selection");
// const result = document.querySelector("#result");
const playerScore1 = document.querySelector("#playerScore > span");
const computerScore1 = document.querySelector("#computerScore > span");
const player = document.querySelectorAll("input");
const computer = document.querySelector(".computerSelection");
const playAgain = document.querySelector("#playAgain");
const playGame = document.querySelector("#playGame");

// btn.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     console.log(e.target.id);
//     const playerSelection = button.dataset.selection;
//     const computerSelection = computerPlay();
//     console.log("Player: " + playerSelection);
//     console.log("Computer: " + computerSelection);
//     playRound(playerSelection, computerSelection);
//   });
// });
console.log(btn);
console.log(playerScore1);
console.log(computerScore1);

function computerPlay() {
  let computerSelection = Math.floor(Math.random() * 3);
  if (computerSelection === 0) {
    return "rock";
  } else if (computerSelection === 1) {
    return "paper";
  } else if (computerSelection === 2) {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let result = "";
  if (playerSelection === computerSelection) {
    return (result = "It's a tie!");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return (result = "You win! Rock beats scissors");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return (result = "You lose! Paper beats rock");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return (result = "You win! Paper beats rock");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return (result = "You lose! Scissors beats paper");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return (result = "You win! Scissors beats paper");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return (result = "You lose! Rock beats scissors");
  } else {
    return (result = "The input is not part of the game");
  }
}

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    let playerScore = 0;
    let computerScore = 0;
    const playerSelection = button.dataset.selection;
    const computerSelection = computerPlay();
    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);
    let result = playRound(playerSelection, computerSelection);
    if (result === "You win! Rock beats scissors") {
      playerScore++;
    } else if (result === "You win! Paper beats rock") {
      playerScore++;
    } else if (result === "You win! Scissors beats paper") {
      playerScore++;
    } else if (result === "You lose! Paper beats rock") {
      computerScore++;
    } else if (result === "You lose! Scissors beats paper") {
      computerScore++;
    } else if (result === "You lose! Rock beats scissors") {
      computerScore++;
    } else if (result === "It's a tie!") {
      playerScore;
      computerScore;
    }
    console.log(result);
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);

    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("You lose the game!");
    } else {
      console.log("It's a tie!");
    }

    playerScore1.textContent = playerScore;
    computerScore1.textContent = computerScore;
  });
});
