let input = require('fs').readFileSync('stdin', 'utf8');
const [hr, km] = input.split("\n").map(item => parseInt(item));
let dist = hr * km;
let average = dist / 12;
console.log(parseFloat(average).toFixed(3))
