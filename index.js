alert("we are playing a rock/paper/scissors game");

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

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let player = prompt("Rock, Paper, or Scissors?");
    let playerSelection = player.toLowerCase();
    let computerSelection = computerPlay();
    if (
      playerSelection === "rock" ||
      playerSelection === "paper" ||
      playerSelection === "scissors"
    ) {
      let result = playRound(playerSelection, computerSelection);
      console.log("Player: " + playerSelection);
      console.log("Computer: " + computerSelection);
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
    } else if (playerSelection.includes(" ")) {
      alert("there is a space at the beginning of your input");
      i--;
    } else if (playerSelection === "") {
      alert(
        "Please enter a word from the options before clicking OK or pressing enter"
      );
      i--;
    } else {
      console.log("The input is not part of the game");
      i--;
    }
  }
  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie!");
  }
}

game();
