'use strict';

let randomRow = 0;
let randomCol = 0;

const card = { suit: "", rank: "" };
const deck = [];
const suits = ["Hearts", "Clubs", "Diamond", "Clubs"];
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Knight", "Queen", "King", "Ace"];


for (let i = 0; i < suits.length; i++) {

    for (let j = 0; j < ranks.length; j++) {

        const newCard = Object.create(card);
        newCard.suit = suits[i];
        newCard.rank = ranks[j];
        deck.push(newCard);

    }
}

function shuffleDeck() {

    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}
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
        cards[i].style.setProperty("--cardRow", card.row);
        cards[i].style.setProperty("--cardCol", card.col);
    }
});

function shuffleCards() {

    hand.forEach((card, i) => {
        if (cards[i]) {
            randomRow = Math.floor(Math.random() * 5);
            randomCol = Math.floor(Math.random() * 6);
            cards[i].style.setProperty("--cardRow", randomRow);
            cards[i].style.setProperty("--cardCol", randomCol);
        }
    });

};

document.querySelector(".shuffle").addEventListener("click", shuffleCards);
