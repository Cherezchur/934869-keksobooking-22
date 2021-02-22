import {advertising} from './data.js';


// find the block for the final rendering of the ad

const adOutput = document.querySelector('.map__canvas');
const cardTemlate = document.querySelector('#card').content.querySelector('.popup');

const card = cardTemlate.cloneNode(true);
adOutput.appendChild(card);

// find the template #cart

console.log(advertising[0]);

// drawing the elements

// fill the elements with data
