let input = require('fs').readFileSync('stdin', 'utf8');
const [distance, liters] = input.split("\n").map(item => parseFloat(item));
let average = distance / liters;
console.log(average.toFixed(3) + " km/l");