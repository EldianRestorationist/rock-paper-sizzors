const againButton = document.querySelector("#playAgain");
const ROCK = document.querySelector("#ROCK");
const PAPER = document.querySelector("#PAPER");
const SCISSORS = document.querySelector("#SCISSORS");
const tallyPlayer = document.querySelector("#tallyPlayer");
const tallyComputer = document.querySelector("#tallyComputer");
const winPic = document.querySelector("#winPic");
const erwinPic = document.querySelector("#erwinPic")

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
                    gameNarrative.textContent = "\nThe titan has also chosen Rock! It's a Tie!";
                } else if (computerSelection === "PAPER") {
                    computerWin += 1;
                    gameNarrative.textContent = "\nThe titan used Paper, Paper beats Rock! Round lost!";
                } else {
                    playerWin += 1;
                    gameNarrative.textContent = "\nThe titan chose Scissors, Rock pummels Scissors! Round Won!";
                }
            } else if (playerSelection === "PAPER") {
                if (computerSelection === "ROCK") {
                    playerWin += 1;
                    gameNarrative.textContent = "\nThe titan chose Rock, Paper beats Rock! Round Won!";
                } else if (computerSelection === "PAPER") {
                    gameNarrative.textContent = "\nThe titan also used Paper! It's a Tie!";
                } else {
                    computerWin += 1;
                    gameNarrative.textContent = "\nThe titan chose Scissors! Scissors slice Paper! Round Lost!";
                }
            } else if (playerSelection === "SCISSORS") {
                if (computerSelection === "ROCK") {
                    computerWin += 1;
                    gameNarrative.textContent = "\nThe titan chose Rock, Rock pummels Scissors! Round Lost!";
                } else if (computerSelection === "PAPER") {
                    playerWin += 1;
                    gameNarrative.textContent = "\nThe titan used Paper, Scissors slice Paper! Round Won!";
                } else {
                    gameNarrative.textContent = "\nThe titan also chose Scissors! It's a Tie!";
                }
            } else {
                gameNarrative.textContent = "Error Try Again";
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
     gameNarrative.textContent = "Choose your weapon: Rock, Paper, or Scizzors";
     //zero out counters
     playerWin = 0;
     computerWin = 0;
     tallyPlayer.textContent = playerWin;
     tallyComputer.textContent = computerWin;
     //turn buttons back on
     enableButtons();
     hidePic();
    }
    //assign playAgain
    againButton.onclick = playAgain;
   
    //output winner
    function showWinner() {
        if (playerWin >= 5) {
            gameNarrative.textContent += "\nYou have defeated the titan! You Win!";
            disableButtons();
            showPic();
        } 
        if (computerWin >= 5) {
            gameNarrative.textContent += "\nThe titan has defeated you. You have become titan fodder.";
            disableButtons();
            showPic();
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
    //function show win pic
    function showPic() {
        erwinPic.style.opactiy = 0;
        erwinPic.style.visibility = "hidden";
        winPic.style.opacity = 1;
        winPic.style.visibility = "visible";
    }
    function hidePic() {
        erwinPic.style.opacity = 1;
        erwinPic.style.visibility = "visible"; 
        winPic.style.opacity = 0;
        winPic.style.visibility = "hidden";
    }