var Letter = require("./Letter");

function Word(wordToGuess){
    this.wordToGuess = [];
    for (var i = 0; i < wordToGuess.length; i++){
        var character = new Letter(wordToGuess[i]);
        this.wordToGuess.push(character);
    };
    this.constructz = function(){
        var stringy = '';
        for (y in this.wordToGuess){
            stringy = stringy.concat(this.wordToGuess[y].revealOrHide()) + ' ';
        }
        return stringy;
    };
    this.checkLetters = function(letter){
        for (x in this.wordToGuess){
            this.wordToGuess[x].checkMe(letter);
        }
    }
}

module.exports = Word;