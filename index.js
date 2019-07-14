const inquire = require("inquirer");
const Word = require("./Word");

console.log("Welcome to the country guessing game!");

var countries = ["Argentina", "Suriname", "French Guiana", "Guyana", "Paraguay", "Uruguay", "Brazil", "Peru", "Chile", "Bolivia", "Ecuador", "Costa Rica", "The Gambia", "Eritrea", "Yemen", "Oman", "Angola", "United Arab Emirates", "Hong Kong", "Czechia", "Switzerland", "Romania", "Bhutan", "South Korea", "USA", "Papua New Guinea", "New Caledonia"];
var chosenOne;
var lives = 10;
var wordNotFinished = true;
function startGame() {
    if (countries.length > 0) {
        lives = 10;
        var randomNum = Math.floor(Math.random() * countries.length);
        chosenOne = new Word(countries[randomNum]);
        countries.splice(randomNum, 1);
        playGame(chosenOne);
    }
    else {
        return console.log("There are no more countries to guess in this game. Thanks for playing!")
    }
}

function playGame(theWord) {
    console.log('                        ' + theWord.constructz());
    inquire
        .prompt([
            {
                name: "letter",
                message: "Guess a letter and press enter"
            }
        ])
        .then(function (answer) {
            var oldWord = theWord.constructz();
            theWord.checkLetters(answer.letter);
            theWord.constructz();
            if (oldWord == theWord.constructz()) {
                lives--;
                console.log("Incorrect!");
                if (lives == 0) {
                    console.log("No more lives remaining.");
                    return endGame();
                }
                console.log(lives + " guesses remaining.");
                playGame(theWord);
            }
            else {
                console.log("Correct!");

                if (!theWord.constructz().includes('_')) {
                    console.log('                        ' + theWord.constructz());
                    console.log("You've won!");
                    wordNotFinished = false;
                    return endGame();
                }
                playGame(theWord);
            }
        })
}


function endGame() {
    inquire
        .prompt([
            {
                name: "decision",
                type: "confirm",
                message: "Do you want to play again?"
            }
        ])
        .then(function (answer) {
            if (answer.decision){
                startGame();
            }
            else {
                console.log("Thanks for playing!");
            }
        })
}

startGame();