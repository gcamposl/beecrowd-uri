var input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split(' ').map(item => parseFloat(item));
let auxArray = [];

for (let i = 0; i < lines.length; i++)
  auxArray[i] = lines[i];

lines.sort((a, b) => a - b);
for (let k = 0; k < lines.length; k++)
  console.log(lines[k])

console.log("")

for (let j = 0; j < auxArray.length; j++)
  console.log(auxArray[j]);
