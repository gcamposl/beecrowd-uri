let input = require('fs').readFileSync('stdin', 'utf8');
const speed = input.split().map(item => parseInt(item));
let time = speed * 2;
console.log(time + " minutos");