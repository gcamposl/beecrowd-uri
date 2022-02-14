var input = require('fs').readFileSync('stdin', 'utf8');
var ray = parseFloat(input);
var ball = (4 / 3) * 3.14159 * Math.pow(ray, 3);
console.log("VOLUME = " + ball.toFixed(3));