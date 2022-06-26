var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

let n = parseInt(lines.shift());
for (let k = 0; k < n; ++k) {
  let expression = lines.shift(); // '<..><.<..>>'

  let answer = 0;
  const stack = new Stack();

  for (let i = 0; i < expression.length; ++i) {
    if (expression[i] === '<') {
      stack.push(expression[i]);
    } else if (expression[i] === '>' && !stack.isEmpty()) {
      answer++;
      stack.pop;
    }
  }
  console.log(answer);
}

// const input = require('fs').readFileSync('stdin', 'utf8');
// let values = input.split('\n');
// const entries = parseInt(values[0]);
// let x, y;
// let tl;
// let k;
// let character;

// let stack = [];
// let j = 1;
// for (let i = 0; i < entries; i++) {
//   stack = values[j++].split('');
//   tl = stack.length;
//   k = 0;
//   x = 0;
//   y = 0;
//   while (k < tl) {
//     character = stack.pop();
//     if (character === '<') x++;
//     else if (character === '>' && character > 0) {
//       x--;
//       y++;
//     }
//     k++;
//   }
//   if (x <= y) console.log(x);
//   else console.log(y);
// }
