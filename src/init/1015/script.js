let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');
const [x1, y1] = lines.shift().split(" ").map(item => parseFloat(item));
const [x2, y2] = lines.shift().split(" ").map(item => parseFloat(item));
let dist = Math.sqrt((Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)));
console.log(parseFloat(dist).toFixed(4));
