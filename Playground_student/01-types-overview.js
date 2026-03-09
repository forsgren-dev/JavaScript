'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../SeidoHelpers/seido-helpers.js';

// let testObj = {name: "Kalle", age: 12};
// let testVar = ` hello ${testObj.name} `;
// console.log(testVar);
// testVar = 12 + 8;
// console.log(testVar);
// testVar = 12 + 15 + ' Hej' + ' 11';
// console.log(testVar);

// let repeatStr = '3'.repeat(20);
// console.log(repeatStr);

// let longStr = 50 * 'hello' * 50;
// console.log(longStr);

// let objOne = {name: "Kalle", age: 12};

// console.log(testObj == objOne);
// console.log(testObj === objOne);

// let objTwo = testObj;

// console.log(testObj == objTwo);
// console.log(testObj === objTwo);

// let objThree = JSON.stringify(testObj);
// let objFour = JSON.stringify(objOne);

// console.log(objThree == objFour);
// console.log(objThree === objFour);


// let o1 = {phone:"070-1111", address: {street: "ringvagen"}};
// let o2 = {phone:"070-1111", address: {street: "ringvagen"}};
// console.log("HÄR:");
// console.log(o1==o2);
// console.log(o1===o2);
// console.log(o1.phone===o2.phone);
// console.log(o1.street===o2.street);
// console.log(o1.address===o2.address);


/* Exercises

1. Declare a variable and the assign various values such as 5, 5+8, 5+8+'15', 5+8+'15'+{}, '', "", ``;
   Write the variable to the console after each assignment
2. create a string from "1"+ "3".repeat(20)
3. create a string variable and assign it value "hello" with 50 * before and after the word
4. create a couple of objects with properterties and test equality (value and referential)

*/

let _seed = new seedGenerator();

let _address = {};
_address.street = "Hissgatan 12";

console.log(_address.street);

_address = {street: 'Gammelgatan 20', zipcode: 1234, city: 'Ankeborg', country: 'Ankestan'};

console.log(_address.country);

_address[`country`] = 'Björneborg';

console.log(_address.country);

_address.street = _seed.street();

console.log(_address.street);

function createAddress() {
  const country = _seed.country;

  return {
    street: _seed.street(country),
    city: _seed.city(country),
    zipCode: _seed.zipCode,
    country: country
  };
}

_address = createAddress();

console.log(_address.street);
console.log('');
for(const property in _address) {
  console.log(`Property: ${property} - ${_address[property]}`);

}

console.log('');
let properties = Object.keys(_address);
for (const property of properties) {
  console.log(`Property: ${property}, Value: ${_address[property]}`);
}

console.log('');
const entries = Object.entries(_address);
for (let i = 0; i < entries.length; i+=1) {
  console.log(`${entries[i][0]} : ${entries[i][1]}`);
}
console.log('');

let latinObj = {};
latinObj.prime = _seed.latinSentence;
latinObj.alt = _seed.latinSentence;

for (const item in latinObj) {
console.log(latinObj[item]);

}


/* Exercise
1. Create a variable _address with an empty object
2. Create properties in _address from street, zipcode, city and country and assign them values both as literals 
   and from the seido-helpers seedGenerator
3. Create an address property in _friend street, zipcode, city and country and assign them values from seedGenerator
*/



