function Letter(char){
    this.char = char,
    this.guessed = false;
    this.revealOrHide = function(){
        if (this.char == ' '){
            return this.char;
        }
        else if (this.guessed == false){
            return '_';
        }
        else {
            return this.char;
        }
    },
    this.checkMe = function(checkIt){
        if (checkIt.toLowerCase() == this.char.toLowerCase()){
            this.guessed = true;
        }
    }
}


module.exports = Letter;