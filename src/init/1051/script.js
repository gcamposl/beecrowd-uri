let input = require('fs').readFileSync('stdin', 'utf8');
let amount = parseFloat(input.split(" "));
let conta = 0;

if (amount >=0 && amount <= 2000)
  console.log("Isento");
else if(amount > 2000 && amount <= 3000){
  conta = (amount - 2000) * 0.08;
  console.log(`R$ ${conta.toFixed(2)}`)
}
else if(amount > 3000 && amount <= 4500) {
  conta = ((amount - 3000) * 0.18) + (0.08 * 1000)
  console.log(`R$ ${conta.toFixed(2)}`)
}
else if (amount > 4500) {
  conta = ((amount - 4500) * 0.28) + (0.18 * 1500) + (0.08 * 1000) 
  console.log(`R$ ${conta.toFixed(2)}`)
}
