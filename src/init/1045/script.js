let input = require('fs').readFileSync('stdin', 'utf8');
let triangulo = input.split(" ").map(item => parseInt(item));
//triangulo.sort((a,b) => b - a);
const teste = function (triangulo) {
  const len = triangulo.length;
  for (let i = 0; i < len; i++) {
    for(let j = 0; j < len; j++) {
      if(triangulo[j] > triangulo[j+1]){
        let temp = triangulo[j];
        triangulo[j] = triangulo[j+1];
        triangulo[j+1] = temp;
      }
    }
  }
  return triangulo;
}

console.log(teste(triangulo));
