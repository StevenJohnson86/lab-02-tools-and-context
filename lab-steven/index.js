'use strict';

const mariners = require('./lib/mariners.js');

let haniger = new mariners.Batter('Mitch Haniger', 1, 17, true);
let paxton = new mariners.Pitcher('James Paxton', 4, 65, false);
let valencia = new mariners.Mariner('Danny Valencia', 7, 26);

console.log(haniger);
console.log(paxton);
console.log(valencia);
