function Letter(char){
    this.char = char,
    this.guessed = false;
    this.revealOrHide = function(){
        if (this.guessed == false){
            return '_';
        }
        else {
            return this.char;
        }
    },
    this.checkMe = function(checkIt){
        if (checkIt == this.char){
            this.guessed = true;
            this.revealOrHide();
        }
    }
}


export {Letter};