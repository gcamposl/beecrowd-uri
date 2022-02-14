var input = require('fs').readFileSync('stdin', 'utf8');
var remainder = parseFloat(input);
const ballots = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.25, 0.10, 0.05, 0.01];
var quant = 0;
console.log("NOTAS:");
for(let i = 0; i < 6; i++){
  quant = parseInt(remainder / ballots[i]);
  console.log(`${quant} nota(s) de R$ ${ballots[i].toFixed(2)}`);
  remainder %= ballots[i];
} 
console.log("MOEDAS:");
for (let j = 6; j < ballots.length; j++){
  quant = parseInt(remainder / ballots[j]);
  console.log(`${quant} moeda(s) de R$ ${ballots[j].toFixed(2)}`);
  remainder = remainder % ballots[j] + 0.00001;
}

