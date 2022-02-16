let input = require('fs').readFileSync('stdin', 'utf8');
let [init, end] = input.split(" ").map(item => parseInt(item));

function gameTime(init, end){
  if(end <= init)
    end += 24;
  let time = end - init;
  return time;
}
let time = gameTime(init, end);
console.log(`O JOGO DUROU ${time} HORA(S)`);