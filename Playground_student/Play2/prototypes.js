/* Exercise
1. Create an object _address and give it a property country with value "Sweden"
2. Create two objects _friend1, _friend2 using _address as prototype
3. Give _friend1 and _friend2 properties name and assing it to "Sam" resp "Frodo"
    - What country do Sam and Frodo live in? - SWEDEN
    - Set _address.country to "Denmark". What country do Sam and Frodo live in? - DENMARK
    - Set _friend2.country to "Finland". What country do Sam and Frodo live in? - DENMARK, FINLAND

4. assign to _address.toString a function that presents the friend with name and country
5. assign to _address.isEqual = function (obj) a function that returns true if this and obj lives in the same country
6. modify to _address.isEqual = function (obj) so it returns true if this and obj lives in the same country and has same name
*/

'use strict'

const _address = {

    country: "Sweden"
};

const _friend1 = Object.create(_address);
const _friend2 = Object.create(_address);

_friend1.name = "Sam";
_friend2.name = "Frodo";

console.log(_friend1.country);
console.log(_friend2.country);

_address.country = "Denmark";

console.log(_friend1.country);
console.log(_friend2.country);

_friend2.country = "Finland";

console.log(_friend1.country);
console.log(_friend2.country);

_address.toString = function() {return `${this.name} - ${this.country}`};

console.log('' + _friend1);
console.log('' + _friend2);

_friend1.country = "Sweden";

_address.isEqual = function(obj) {
if (!(this.country === obj.country) || !(this.name === obj.name)) { return false };

    return true;
}

console.log(_friend1.isEqual(_friend2));

_friend1.country = "Finland";

console.log(_friend2.isEqual(_friend1));

_friend1.name = "Frodo";

console.log(_friend2.isEqual(_friend1));


