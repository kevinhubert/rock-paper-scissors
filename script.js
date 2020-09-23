var playerScore = 0;
var computerScore = 0;

function start(inputBtn) {
  // Player
  var player = inputBtn;
  // Computer
  // var randomNumber = Math.random();
  var computer = "";
  // if(randomNumber <= .33) {
  //     computer = 'rock';
  // } else if(randomNumber <= .66 && randomNumber > .33) {
  //     computer = 'paper';
  // } else {
  //     computer = 'scissors';
  // }

  const options = ["Rock", "Paper", "Scissors"];
  //return an int that will map to an array item in the list
  const computerChoice = options[Math.floor(Math.random() * options.length)];

  // Score
  var winner = checkScore(player, computer);
  var alertStatus = 0;
  switch (winner) {
    case "draw":
      alertStatus = 1;
      break;
    case "player":
      alertStatus = 2;
      playerScore = playerScore + 1;
      break;
    case "computer":
      alertStatus = 3;
      computerScore = computerScore + 1;
      break;
    default:
      break;
  }
  var playerText = document.getElementById("player-score");
  var computerText = document.getElementById("computer-score");
  var playerValue = document.getElementById("player-choice");
  var computerValue = document.getElementById("computer-choice");

  playerText.innerHTML = playerScore;
  computerText.innerHTML = computerScore;
  playerValue.innerHTML = player;
  computerValue.innerHTML = computer;

  // Display Alert
  switch (alertStatus) {
    case 1:
      document.getElementById("success").style.display = "none";
      document.getElementById("danger").style.display = "none";
      document.getElementById("warning").style.display = "block";
      break;
    case 2:
      document.getElementById("success").style.display = "block";
      document.getElementById("danger").style.display = "none";
      document.getElementById("warning").style.display = "none";
      break;
    case 3:
      document.getElementById("success").style.display = "none";
      document.getElementById("danger").style.display = "block";
      document.getElementById("warning").style.display = "none";
      break;
    default:
      document.getElementById("success").style.display = "none";
      document.getElementById("danger").style.display = "none";
      document.getElementById("warning").style.display = "none";
      break;
  }
}

function checkScore(player, computer) {
  // Draw
  if (player === computer) {
    // console.log('Draw!');
    return "draw";
  } else {
    // Rock
    if (player === "rock") {
      if (computer === "paper") {
        // console.log('Computer');
        return "computer";
      } else {
        // console.log('Player');
        return "player";
      }
    }
    // Paper
    if (player === "paper") {
      if (computer === "scissors") {
        // console.log('Computer');
        return "computer";
      } else {
        // console.log('Player');
        return "player";
      }
    }
    // Scissors
    if (player === "scissors") {
      if (computer === "rock") {
        // console.log('Computer');
        return "computer";
      } else {
        // console.log('Player');
        return "player";
      }
    }
  }
}
