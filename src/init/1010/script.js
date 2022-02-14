var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var [id1, qtde1, amount1] = lines.shift().split(" ");
var [id2, qtde2, amount2] = lines.shift().split(" ");
var total1 = qtde1 * amount1;
var total2 = qtde2 * amount2;
var totalValue = total1 + total2;
console.log("VALOR A PAGAR: R$ " + totalValue.toFixed(2));





