'use strict';

const card = { suit: "", rank: "" };
card.toString = function () {
    return `${this.rank} of ${this.suit}`;
};
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

// cards.forEach(card => console.log(`${card.rank} of ${card.suit}`));

// console.log(...cards);
deck.forEach(card => console.log(card.toString()));


const firstHalf = deck.slice(0, 10);
const secondHalf = deck.slice(deck.length - 5, deck.length);
const deck2 = [...firstHalf, ...secondHalf];

console.log("--------------");

deck2.forEach(card => console.log(card.toString()));


/* Exercise
1. use the ...operator and array.slice to create a new deck of cards which contains
   ONLY the first 10 and last 5 cards of the original deck
*/