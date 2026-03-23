'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../../SeidoHelpers/seido-helpers.js';

console.log("Hello from pets");

const _prot = {};
_prot.toString = function () {return `${this.name} is ${this.age} years old`}


function createPet(_seeder)
{
    const p = Object.create(_prot);
    p.name = _seeder.petName;
    p.age = randomNumber(1, 10);
    return p;
}

const _seeder = new seedGenerator();
const _pets = [];

for (let index = 0; index < 10; index++) {
    _pets.push(createPet(_seeder));    
}

const myList = document.querySelector('#myPets');
console.log(_pets);
for (const pet of _pets) {
    const li = document.createElement('li');
    li.textContent = pet.toString();
    li.addEventListener('click', () => { 
        window.alert(`You clicked ${pet.name}...`);
    });
    myList.appendChild(li);
}

const endMsg = document.querySelector('#endMsg');
endMsg.textContent = _seeder.latinParagraph.paragraph;



/* Exercises
1. Add _pets as li tags under myPets so they present themselves
2. Add a clickHandler to each li tag so the alert box shows what pet is clicked
3. Add a latis paragraph using, _seeder.latinParagraph.paragraph; to p-tag endMsg
*/