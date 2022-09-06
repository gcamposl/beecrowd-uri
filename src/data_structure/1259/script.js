let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let numbers = lines.map(x => parseInt(x));

const pairs = numbers.filter((x) => x % 2 === 0).sort((a, b) => a - b);
const odd = numbers.filter((x) => x % 2 !== 0).sort((a, b) => b - a);

numbers = pairs.concat(odd);

numbers.forEach((x) => {
  console.log(x);
});
