var Letter = require("./Letter");
console.log(Letter);

var a = new Letter('a');

console.log(a.checkMe('a'));
console.log(a.guessed);
console.log(a.revealOrHide());

function Word(wordToGuess){
    this.wordToGuess = [];
    for (var i = 0; i < wordToGuess.length; i++){
        var character = new Letter(wordToGuess[i]);
        this.wordToGuess.push(character);
    };
    this.constructz = function(){
        var stringy = '';
        for (y in this.wordToGuess){
            stringy = stringy.concat(this.wordToGuess[y].revealOrHide());
        }
        return stringy;
    };
    
}

var guessThis = new Word('1 2 3');

console.log(guessThis.constructz())