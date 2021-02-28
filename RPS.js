const againButton = document.querySelector("#playAgain");
const ROCK = document.querySelector("#ROCK");
const PAPER = document.querySelector("#PAPER");
const SCISSORS = document.querySelector("#SCISSORS");
const tallyPlayer = document.querySelector("#tallyPlayer");
const tallyComputer = document.querySelector("#tallyComputer");
    
    //variables keep track of wins
    let playerWin = 0;
    let computerWin = 0;
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
                    gameNarrative.textContent += "\nIt's a Tie";
                }
            } else {
                gameNarrative.textContent += "Error Try Again";
            }
        //add tallies
        tallyPlayer.textContent = playerWin;
        tallyComputer.textContent = computerWin;
        //output winner
        showWinner();
    }
   
    //function to restart game
    function playAgain() {
     //empty text box
     gameNarrative.textContent = "Please choose Rock, Paper, or Scizzors";
     //zero out counters
     playerWin = 0;
     computerWin = 0;
     tallyPlayer.textContent = playerWin;
     tallyComputer.textContent = computerWin;
     //turn buttons back on
     enableButtons();
    }
    //assign playAgain
    againButton.onclick = playAgain;
   
    //output winner
    function showWinner() {
        if (playerWin >= 5) {
            gameNarrative.textContent += "You Win!";
            disableButtons();
        } 
        if (computerWin >= 5) {
            gameNarrative.textContent += "You Lose!";
            disableButtons();
        }
    }
    //turn buttons on/off
    function disableButtons() {
        ROCK.disabled = true;
        PAPER.disabled = true;
        SCISSORS.disabled = true;
    }
    function enableButtons() {
        ROCK.disabled = false;
        PAPER.disabled = false;
        SCISSORS.disabled = false;
    }