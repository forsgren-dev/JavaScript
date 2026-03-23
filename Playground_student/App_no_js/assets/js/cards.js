'use strict';

import { deckOfCards } from "./deck-of-cards.js";

const deck = new deckOfCards();

deck.cards.forEach(card => {

    switch (card.suit) {
        case 'Clubs':
            switch (card.numeral) {
                case 'Two': card.col = 1; card.row = 0; break;
                case 'Three': card.col = 2; card.row = 0; break;
                case 'Four': card.col = 3; card.row = 0; break;
                case 'Five': card.col = 4; card.row = 0; break;
                case 'Six': card.col = 5; card.row = 0; break;
                case 'Seven': card.col = 6; card.row = 0; break;
                case 'Eight': card.col = 7; card.row = 0; break;
                case 'Nine': card.col = 8; card.row = 0; break;
                case 'Ten': card.col = 9; card.row = 0; break;
                case 'Knight': card.col = 10; card.row = 0; break;
                case 'Queen': card.col = 11; card.row = 0; break;
                case 'King': card.col = 12; card.row = 0; break;
                case 'Ace': card.col = 0; card.row = 0; break;
            } break;


        case 'Spades':
            switch (card.numeral) {
                case 'Two': card.col = 1; card.row = 1; break;
                case 'Three': card.col = 2; card.row = 1; break;
                case 'Four': card.col = 3; card.row = 1; break;
                case 'Five': card.col = 4; card.row = 1; break;
                case 'Six': card.col = 5; card.row = 1; break;
                case 'Seven': card.col = 6; card.row = 1; break;
                case 'Eight': card.col = 7; card.row = 1; break;
                case 'Nine': card.col = 8; card.row = 1; break;
                case 'Ten': card.col = 9; card.row = 1; break;
                case 'Knight': card.col = 10; card.row = 1; break;
                case 'Queen': card.col = 11; card.row = 1; break;
                case 'King': card.col = 12; card.row = 1; break;
                case 'Ace': card.col = 0; card.row = 1; break;
            } break;

        case 'Diamonds':
            switch (card.numeral) {
                case 'Two': card.col = 1; card.row = 2; break;
                case 'Three': card.col = 2; card.row = 2; break;
                case 'Four': card.col = 3; card.row = 2; break;
                case 'Five': card.col = 4; card.row = 2; break;
                case 'Six': card.col = 5; card.row = 2; break;
                case 'Seven': card.col = 6; card.row = 2; break;
                case 'Eight': card.col = 7; card.row = 2; break;
                case 'Nine': card.col = 8; card.row = 2; break;
                case 'Ten': card.col = 9; card.row = 2; break;
                case 'Knight': card.col = 10; card.row = 2; break;
                case 'Queen': card.col = 11; card.row = 2; break;
                case 'King': card.col = 12; card.row = 2; break;
                case 'Ace': card.col = 0; card.row = 2; break;
            } break;

        case 'Hearts':
            switch (card.numeral) {
                case 'Two': card.col = 1; card.row = 3; break;
                case 'Three': card.col = 2; card.row = 3; break;
                case 'Four': card.col = 3; card.row = 3; break;
                case 'Five': card.col = 4; card.row = 3; break;
                case 'Six': card.col = 5; card.row = 3; break;
                case 'Seven': card.col = 6; card.row = 3; break;
                case 'Eight': card.col = 7; card.row = 3; break;
                case 'Nine': card.col = 8; card.row = 3; break;
                case 'Ten': card.col = 9; card.row = 3; break;
                case 'Knight': card.col = 10; card.row = 3; break;
                case 'Queen': card.col = 11; card.row = 3; break;
                case 'King': card.col = 12; card.row = 3; break;
                case 'Ace': card.col = 0; card.row = 3; break;
            } break;
    }
}
);

deck.shuffle();
const hand = deck.cards.slice(0, 5);
const cards = document.querySelectorAll(".PlayingCard");

function shuffleCards() {

    deck.shuffle();
    const hand = deck.cards.slice(0, 5);

    hand.forEach((card, i) => {
    if (cards[i]) {
        cards[i].style.setProperty("--cardRow", card.row);
        cards[i].style.setProperty("--cardCol", card.col);
    }
});

}



document.querySelector(".shuffle").addEventListener("click", shuffleCards);
