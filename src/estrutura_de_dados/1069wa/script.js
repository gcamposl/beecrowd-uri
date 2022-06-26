const input = require('fs').readFileSync('stdin', 'utf8');
let values = input.split('\n');
const entries = parseInt(values[0]);
let open, close;
let tl;
let k;

let stack = [];
let j = 1;
for (let i = 0; i < entries; i++) {
  stack = values[j++].split('');
  tl = stack.length;
  k = 0;
  open = 0;
  close = 0;
  while (k < tl) {
    character = stack.pop();
    if (character === '<') open++;
    else if (character === '>') close++;
    k++;
  }
  if (open <= close) console.log(open);
  else console.log(close);
}

// open = close = 0;
// while (i < iterate) {
//   const value = entry[i];
//   for (let j = 0; j < value.length; j++)
//     if (value[j] === '<') open++;
//     else if (value[j] === '>') close++;
//   i++;
// }

// if (open <= close) console.log(open, 'open');
// else console.log(close, 'close');
