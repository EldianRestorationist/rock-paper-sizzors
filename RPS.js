const againButton = document.querySelector("#playAgain");
const ROCK = document.querySelector("#ROCK");
const PAPER = document.querySelector("#PAPER");
const SCISSORS = document.querySelector("#SCISSORS");
const tallyPlayer = document.querySelector("#tallyPlayer");
const tallyComputer = document.querySelector("#tallyComputer");
    
    //variables keep track of wins
    let playerWin = 0;
    let computerWin = 0;
    let tieGame;
    let winner;
    //variable for computer selection
    let computerSelection;
    //function to give random computer selection
    function computerPlay() {
        let computerSelect = ["ROCK", "PAPER", "SCISSORS"];
        let randomIndex = Math.floor(Math.random() * computerSelect.length);
        computerSelection = computerSelect[randomIndex];
        return computerSelection;
    }
    //variable for player selection
    let playerSelection;
    //input player selection
    
    ROCK.addEventListener('click', () => {
        playRound("ROCK");
    });
    PAPER.addEventListener('click', () => {
        playRound("PAPER");
    });
    SCISSORS.addEventListener('click', () => {
        playRound("SCISSORS");
    });
    
    //function to play game
    function playRound(playerSelection, computerSelection) {
        computerSelection = computerPlay();
        if (playerSelection === "ROCK") {
            if (computerSelection === "ROCK") {
                tieGame += 1;
                gameNarrative.textContent += "\nIt's a Tie";
            } else if (computerSelection === "PAPER") {
                computerWin += 1;
                gameNarrative.textContent += "\nRound Lost! Paper beats Rock";
            } else {
                playerWin += 1;
                gameNarrative.textContent += "\nRound Won! Rock beats Scissors";
            }
        } else if (playerSelection === "PAPER") {
            if (computerSelection === "ROCK") {
                playerWin += 1;
                gameNarrative.textContent += "\nRound Won! Paper beats Rock";
            } else if (computerSelection === "PAPER") {
                tieGame += 1;
                gameNarrative.textContent += "\nIt's a Tie";
            } else {
                computerWin += 1;
                gameNarrative.textContent += "\nRound Lost! Scissors beats Paper";
            }
        } else if (playerSelection === "SCISSORS") {
            if (computerSelection === "ROCK") {
                computerWin += 1;
                gameNarrative.textContent += "\nRound Lost! Rock beats Scissors";
            } else if (computerSelection === "PAPER") {
                playerWin += 1;
                gameNarrative.textContent += "\nRound Won! Scissors beats Paper";
            } else {
                tieGame += 1;
                gameNarrative.textContent += "\nIt's a Tie";
            }
        } else {
            gameNarrative.textContent += "Error Try Again";
        }
        tallyPlayer.textContent = playerWin;
        tallyComputer.textContent = computerWin;
        showWinner;
    }
    //function to run the game 
        //playRound();
    //output result
    //function to restart game
    function playAgain() {
     //empty text box
     gameNarrative.textContent = "Please choose Rock, Paper, or Scizzors";
     //zero out counters
     playerWin = 0;
     computerWin = 0;
    }
    againButton.onclick = playAgain();
    //output winner
    function showWinner() {
        if (playerWin >= 5) {
            gameNarrative.textContent = "You Win!";
        } 
        if (computerWin >= 5) {
            gameNarrative.textContent = "You Lose!";
        }
    }