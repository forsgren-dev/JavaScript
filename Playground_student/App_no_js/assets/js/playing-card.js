//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

// To enable ES6 Modules, export and import you need to have a package.json in your js applications root directory
// Open terminal in your applications root directory and type: npm init -y
// Then add the line at the top   "type": "module",    

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

const prototypeCard = {
    cardColor: function () {
        switch (this.suit) {
            case 'Hearts':
            case 'Diamonds': return 'red';
        }
        return 'black';
    },
    
    cardFaceOrNumeral: function () {   
//    get cardFaceOrNumeral () {    //note, I can now change it to a getter
            switch (this.numeral) {
            case 'Knight':
            case 'Queen':
            case 'King': return 'face';
        }
        return 'numeral';
    },





    toString: function () { return `${this.suit} of ${this.numeral} is a ${this.cardColor()} ${this.cardFaceOrNumeral()} card` }

    //if I use a getter
//    toString: function () { return `${this.suit} of ${this.numeral} is a ${this.cardColor()} ${this.cardFaceOrNumeral} card` }
}


export {prototypeCard}
