'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';
 
const fruitProto = {
    type: "fruit",
    color: "unknown"
};

const apple = Object.create(fruitProto);

const orange = Object.create(fruitProto);

apple.type="apple";
console.log(apple);
console.log(orange);

orange.type="orange";
console.log(apple.type);
console.log(orange.type);

const banana = Object.create(fruitProto);
console.log(banana);
console.log(banana.type);

delete apple.type;
console.log(apple);
console.log(apple.type);

fruitProto.type = "unknown";
console.log(apple.type);
console.log(banana.type);
console.log(orange.type);




