'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../SeidoHelpers/seido-helpers.js';

let seeder = new seedGenerator();

function createFriend() {

    const country = seeder.country;

    return {
        firstName: seeder.firstName,
        lastName: seeder.lastName,
        address: {street: seeder.street(country), city: seeder.city(country), country: country}

    }

}

let friends = [];
for (let i = 0; i < 50; i++)
{
    friends.push(createFriend());
}

friends.forEach(friend => {
    console.log(`${friend.firstName} ${friend.lastName}`);
    console.log(`${friend.address.street}`);
    console.log(`${friend.address.city}, ${friend.address.country}`);
    console.log(`--------------------------------------------------`);

});

