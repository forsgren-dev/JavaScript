'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../SeidoHelpers/seido-helpers.js';

let testObj = {name: "Kalle", age: 12};
let testVar = ` hello ${testObj.name} `;
console.log(testVar);
testVar = 12 + 8;
console.log(testVar);
testVar = 12 + 15 + ' Hej' + ' 11';
console.log(testVar);

let repeatStr = '3'.repeat(20);
console.log(repeatStr);

let longStr = 50 * 'hello' * 50;
console.log(longStr);

let objOne = {name: "Kalle", age: 12};

console.log(testObj == objOne);
console.log(testObj === objOne);

let objTwo = testObj;

console.log(testObj == objTwo);
console.log(testObj === objTwo);

let objThree = JSON.stringify(testObj);
let objFour = JSON.stringify(objOne);

console.log(objThree == objFour);
console.log(objThree === objFour);


let o1 = {phone:"070-1111", address: {street: "ringvagen"}};
let o2 = {phone:"070-1111", address: {street: "ringvagen"}};
console.log("HÄR:");
console.log(o1==o2);
console.log(o1===o2);
console.log(o1.phone===o2.phone);
console.log(o1.street===o2.street);
console.log(o1.address===o2.address);


/* Exercises

1. Declare a variable and the assign various values such as 5, 5+8, 5+8+'15', 5+8+'15'+{}, '', "", ``;
   Write the variable to the console after each assignment
2. create a string from "1"+ "3".repeat(20)
3. create a string variable and assign it value "hello" with 50 * before and after the word
4. create a couple of objects with properterties and test equality (value and referential)

*/


