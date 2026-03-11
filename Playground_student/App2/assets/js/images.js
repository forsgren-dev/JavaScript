'use strict';
import { seedGenerator, uniqueId, randomNumber, randomDecimal, deepCopy, isEqual } from '../../../../SeidoHelpers/seido-helpers.js';

const imgFiles = "bear.png, elephant.png, img1.png, img2.png, img3.png, img4.png, img5.png, img6.png, parrot.png";
const nrOfItems = 14;
const _seeder = new seedGenerator();
let albumData = [];

// Gathering data

for (let i = 0; i < nrOfItems; i++) {

const image = { 

    id: uniqueId(),
    imgSrc: `../img/${_seeder.fromString(`${imgFiles}`)}`,
    imgTxt: `${_seeder.latinSentences(2)}`

}
albumData.push(image);

}


renderItems();

// Rendering
function renderItems() {
    let imgItems = document.querySelector('#ImgAlbum');

    imgItems.innerHTML = "";

    for (let i = 0; i < albumData.length; i++) {

        const div = document.createElement("div");
        
        div.className = "ImgItem";

        div.innerHTML = `
    
                <div><img src="${albumData[i].imgSrc}"></div>
                <p>
                    ${albumData[i].imgTxt}
                </p>
    
    `
        imgItems.appendChild(div);
    }
}





