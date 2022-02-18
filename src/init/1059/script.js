let input = require('fs').readFileSync('stdin', 'utf8');
let i = 1;
while(i < 101 ){
  if(parseInt(i % 2) === 0)
    console.log(i);
  i++;
}