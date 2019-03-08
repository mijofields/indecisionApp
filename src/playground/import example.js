import cheese, { square, add } from './utils.js';
import old, { isAdult, canDrink } from './person.js';

console.log(`app.js is running!`);

console.log(square(5));
console.log(add(100,1));
console.log(cheese(2, 3));

console.log(`is adult: `, isAdult(6));
console.log(`can drink: `, canDrink(18));
console.log(`is senior: `, old(64));