var input = require('fs').readFileSync('stdin', 'utf8');
let [a, b] = input.split(" ").map(item => parseInt(item));
let mult = 0;
if (b > a) {
  mult = b % a;
  if(mult == 0)
    console.log("Sao Multiplos")
  else
    console.log("Nao sao Multiplos")
} else {
  mult = a % b;
  if(mult == 0)
    console.log("Sao Multiplos")
  else
    console.log("Nao sao Multiplos")
}
  