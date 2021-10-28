var input = require('fs').readFileSync('stdin', 'utf8')

var lines = input.split('\n')
var nome = parseFloat(lines.shift())
var payment = parseFloat(lines.shift())
var amount = parseFloat(lines.shift())

var comission = amount * 0.15
var total = comission + payment
console.log('TOTAL = R$ ' + total.toFixed(2))
