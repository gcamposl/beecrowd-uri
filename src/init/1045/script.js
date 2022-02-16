let input = require('fs').readFileSync('stdin', 'utf8');
let triangulo = input.split(" ").map(item => parseFloat(item));
//triangulo.sort((a,b) => b - a);
const teste = function (triangulo) {
  let temp;
  const len = triangulo.length;
  for (let i = 0; i < len; i++) {
    for(let j = 0; j < len; j++) {
      if(triangulo[j] < triangulo[j+1]){
        temp = triangulo[j];
        triangulo[j] = triangulo[j+1];
        triangulo[j+1] = temp;
      }
    }
  }
  return triangulo;
}

let [a, b, c] = teste(triangulo);
//let [a, b, c] = triangulo.sort((a,b) => b - a);
if (a >= (b + c)){
  console.log("NAO FORMA TRIANGULO");
} else {
  if (Math.pow(a, 2) === (Math.pow(b, 2) + Math.pow(c, 2))){
    console.log("TRIANGULO RETANGULO");
  } 
  if (Math.pow(a, 2) > (Math.pow(b, 2) + Math.pow(c, 2))){
    console.log("TRIANGULO OBTUSANGULO");
  } 
  if (Math.pow(a, 2) < (Math.pow(b, 2) + Math.pow(c, 2))){
    console.log("TRIANGULO ACUTANGULO");
  } 
  if (a === b && b === c){
    console.log("TRIANGULO EQUILATERO");
  } else if (a === b !== c || b === c !== a || a === c !== b){
    console.log("TRIANGULO ISOSCELES");
  }  
}

// Submetido
// let triangulo = input.split(" ").map(item => parseFloat(item));
// let [a, b, c] = triangulo.sort((a,b) => b - a);
// if (a >= (b + c)){
//   console.log("NAO FORMA TRIANGULO");
// } else {
//   if ((a*a) === ((b*b) + (c*c))){
//     console.log("TRIANGULO RETANGULO");
//   } 
//   if ((a*a) > ((b*b) + (c*c))){
//     console.log("TRIANGULO OBTUSANGULO");
//   } 
//   if ((a*a) < ((b*b) + (c*c))){
//     console.log("TRIANGULO ACUTANGULO");
//   } 
//   if (a === b && b === c){
//     console.log("TRIANGULO EQUILATERO");
//   } if ((((a == b) && (a != c) || (b == c) && (b != a)) || ((a == c) && (b != c)))){
//     console.log("TRIANGULO ISOSCELES");
//   }  
// }