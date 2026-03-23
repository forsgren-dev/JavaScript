'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';

//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
//https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors

const firstPet = document.querySelector('#myPets').firstElementChild;


console.log(firstPet);


const myVehicles = document.querySelectorAll('#myVehicles li[data-row-id]');

console.log(myVehicles);

const myFriends = document.querySelectorAll('#myFriends li[data-row-id] a');

console.log(myFriends);