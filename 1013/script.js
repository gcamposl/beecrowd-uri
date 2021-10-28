let input = require('fs').readFileSync('stdin', 'utf8');
const [a, b, c] = input.split(" ").map(item => parseInt(item));
let maiorAB = ((a + b) + Math.abs(a - b)) / 2
const maiorXC = ((maiorAB + c) + Math.abs(c - maiorAB)) / 2
console.log(maiorXC + " eh o maior");
