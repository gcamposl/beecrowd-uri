var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map(item => parseFloat(item));
var [a, b, c] = lines;
var delta  = Math.sqrt(b * b - 4 * a * c);
if(a !== 0 && delta > 0) {
  var r1 = (-b + delta)/ (2 * a);
  var r2 = (-b - delta)/ (2 * a);
  console.log(`R1 = ${r1.toFixed(5)}`);
  console.log(`R2 = ${r2.toFixed(5)}`);
} else {
  console.log("Impossivel calcular");
}
  

