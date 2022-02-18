let input = require('fs').readFileSync('stdin', 'utf8');
const numbers = input.split("\n");
let i = 0;
for (let number of numbers) {
  if(number > 0)
    i++;
}
console.log(`${i} valores positivos`);