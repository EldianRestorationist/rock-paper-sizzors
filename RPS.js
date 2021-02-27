const playButton = document.querySelector("#playButton");
playButton.onclick = playGame;
const ROCK = document.querySelector("#ROCK");
const PAPER = document.querySelector("#PAPER");
const SCISSORS = document.querySelector("#SCISSORS");
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
    function playerPlay() {
        ROCK.addEventListener('click', () => {
            playerSelection = "ROCK";
        });
        PAPER.addEventListener('click', () => {
            playerSelection = "PAPER";
        });
        SCISSORS.addEventListener('click', () => {
            playerSelection = "SCISSORS";
        });
        return playerSelection;
    };
    //variables to keep track of wins
    let playerWin = 0;
    let computerWin = 0;
    let tieGame = 0;
    //function to play game
    function playRound(playerSelection, computerSelection) {
        playerSelection = playerPlay();
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

    }
    //function to run the game 
        //playRound();
    //output result
    //loop to run game 5 rounds
    function playGame() {
        let i = 0;
        while ((playerWin < 5) && (computerWin < 5) && (i < 30)) {
            playRound();
            i++;
        } 
        showWinner();
    }
    //output winner
    function showWinner() {
        if (playerWin > computerWin) {
            gameNarrative.textContent += "You Win!";
        } else {
            gameNarrative.textContent += "You Lose!";
        }
    }