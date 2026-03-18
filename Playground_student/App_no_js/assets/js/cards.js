'use strict';

import { deckOfCards } from "./deck-of-cards";

deckOfCards.forEach(card => {

    switch (card.suit) {
        case 'Clubs':
            switch (card.numeral) {
                case 'Two': card.col = 0; card.row = 0; break;
                case 'Three': card.col = 1; card.row = 0; break;
                case 'Four': card.col = 2; card.row = 0; break;
                case 'Five': card.col = 3; card.row = 0; break;
                case 'Six': card.col = 4; card.row = 0; break;
                case 'Seven': card.col = 5; card.row = 0; break;
                case 'Eight': card.col = 6; card.row = 0; break;
                case 'Nine': card.col = 0; card.row = 1; break;
                case 'Ten': card.col = 1; card.row = 1; break;
                case 'Knight': card.col = 2; card.row = 1; break;
                case 'Queen': card.col = 3; card.row = 1; break;
                case 'King': card.col = 4; card.row = 1; break;
                case 'Ace': card.col = 5; card.row = 1; break;
            } break;


        case 'Spades':
            switch (card.numeral) {
                case 'Two': card.col = 6; card.row = 1; break;
                case 'Three': card.col = 0; card.row = 2; break;
                case 'Four': card.col = 1; card.row = 2; break;
                case 'Five': card.col = 2; card.row = 2; break;
                case 'Six': card.col = 3; card.row = 2; break;
                case 'Seven': card.col = 4; card.row = 2; break;
                case 'Eight': card.col = 5; card.row = 2; break;
                case 'Nine': card.col = 6; card.row = 2; break;
                case 'Ten': card.col = 0; card.row = 3; break;
                case 'Knight': card.col = 1; card.row = 3; break;
                case 'Queen': card.col = 2; card.row = 3; break;
                case 'King': card.col = 3; card.row = 3; break;
                case 'Ace': card.col = 4; card.row = 3; break;
            } break;

        case 'Diamonds':
            switch (card.numeral) {
                case 'Two': card.col = 6; card.row = 3; break;
                case 'Three': card.col = 0; card.row = 4; break;
                case 'Four': card.col = 1; card.row = 4; break;
                case 'Five': card.col = 2; card.row = 4; break;
                case 'Six': card.col = 3; card.row = 4; break;
                case 'Seven': card.col = 4; card.row = 4; break;
                case 'Eight': card.col = 5; card.row = 4; break;
                case 'Nine': card.col = 6; card.row = 4; break;
                case 'Ten': card.col = 0; card.row = 5; break;
                case 'Knight': card.col = 1; card.row = 5; break;
                case 'Queen': card.col = 2; card.row = 5; break;
                case 'King': card.col = 3; card.row = 5; break;
                case 'Ace': card.col = 4; card.row = 5; break;
            } break;

        case 'Hearts':
            switch (card.numeral) {
                case 'Two': card.col = 6; card.row = 5; break;
                case 'Three': card.col = 0; card.row = 6; break;
                case 'Four': card.col = 1; card.row = 6; break;
                case 'Five': card.col = 2; card.row = 6; break;
                case 'Six': card.col = 3; card.row = 6; break;
                case 'Seven': card.col = 4; card.row = 6; break;
                case 'Eight': card.col = 5; card.row = 6; break;
                case 'Nine': card.col = 6; card.row = 6; break;
                case 'Ten': card.col = 0; card.row = 7; break;
                case 'Knight': card.col = 1; card.row = 7; break;
                case 'Queen': card.col = 2; card.row = 7; break;
                case 'King': card.col = 3; card.row = 7; break;
                case 'Ace': card.col = 4; card.row = 7; break;
            } break;


    }

}

);

const hand = [
    { row: 2, col: 3 },
    { row: 1, col: 4 },
    { row: 3, col: 6 },
    { row: 0, col: 2 },
    { row: 4, col: 1 }
];

const cards = document.querySelectorAll(".PlayingCard");

hand.forEach((card, i) => {
    if (cards[i]) {
        // cards[i].style.setProperty("--cardRow", card.row);
        // cards[i].style.setProperty("--cardCol", card.col);
    }
});

function shuffleCards() {

    hand.forEach((card, i) => {
        if (cards[i]) {
            // cards[i].style.setProperty("--cardRow", card.row);
            // cards[i].style.setProperty("--cardCol", card.col);
        }
    });

};

document.querySelector(".shuffle").addEventListener("click", shuffleCards);
