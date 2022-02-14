let input = require('fs').readFileSync('stdin', 'utf8');
let seg = parseInt(input)

const hr = parseInt(seg / 3600);
seg = seg % 3600;

let min = parseInt(seg / 60)
seg = seg % 60;

console.log(`${hr}:${min}:${seg}`);
