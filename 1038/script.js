var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map(item => parseInt(item));
var [code, quant] = lines;
var total = 0;

switch (code) {
  case 1:
    total = quant * 4;
    console.log(`Total: R$ ${total.toFixed(2)}`);
    break;
  case 2:
    total = quant * 4.5;
    console.log(`Total: R$ ${total.toFixed(2)}`);
    break;
  case 3:
    total = quant * 5;
    console.log(`Total: R$ ${total.toFixed(2)}`);
    break;
  case 4:
    total = quant * 2;
    console.log(`Total: R$ ${total.toFixed(2)}`);
    break;
  case 5:
    total = quant * 1.5;
    console.log(`Total: R$ ${total.toFixed(2)}`);
    break;
}