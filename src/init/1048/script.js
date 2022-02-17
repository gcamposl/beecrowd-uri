let input = require('fs').readFileSync('stdin', 'utf8');
let amount = parseFloat(input.split(" ").shift());
let reaj = 0;
let newAmount = 0;

function findPerc(amount){
  let percentual = 0;
  if (amount >= 0 && amount <= 400.01)
    return percentual = 15;
  else if (amount >= 400.01 && amount <= 800.00)
    return percentual = 12;
  else if (amount >= 800.01 && amount <= 1200.00)
    return percentual = 10;
  else if (amount >= 1200.01 && amount <= 2000.00)
    return percentual = 7;
  else if (amount > 2000.00)
    return percentual = 4;
}

function calPerc(amount, newAmount, reaj){
  let percentual = findPerc(amount);
  reaj = (amount * percentual)/100.00;
  newAmount = amount + reaj;
  showCalc(percentual, newAmount, reaj);
}

function showCalc (percentual, newAmount, reaj) {
  console.log(`Novo salario: ${newAmount.toFixed(2)}`) 
  console.log(`Reajuste ganho: ${reaj.toFixed(2)}`)
  console.log(`Em percentual: ${percentual} %`)
}

calPerc(amount, newAmount, reaj);


  