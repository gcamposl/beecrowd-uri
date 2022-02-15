var input = require('fs').readFileSync('stdin', 'utf8');
let [a, b, c] = input.split(' ').map(item => parseFloat(item));
//lines

if (a < (b + c) && b < (a + c) && c < (a + b)){
  let per = a + b + c;
  console.log(`Perimetro = ${per.toFixed(1)}`);
} else {
  let area = ((a+b) * c) / 2; 
  console.log(`Area = ${area.toFixed(1)}`);
}