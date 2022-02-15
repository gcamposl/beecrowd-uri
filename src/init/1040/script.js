let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split(' ').map(item => parseFloat(item));
let [n1, n2, n3, n4] = lines;
n1 *= 2;
n2 *= 3;
n3 *= 4;
let average = (n1 + n2 + n3 + n4) / 10;
console.log(`Media: ${average.toFixed(1)}`);
if (average >= 7.0){
  console.log(`Aluno aprovado.`);
} else if (average < 5.0){
  console.log(`Aluno reprovado.`);
} else if (average >= 5.0 && average < 6.9){
  console.log(`Aluno em exame.`);
  lines = input.split("\n").map(item => parseFloat(item));
  let exam = lines[1];
  console.log(`Nota do exame: ${exam.toFixed(1)}`);
  if(exam >= 5.0){
    average = (average + exam) / 2;
    console.log(`Aluno aprovado.`);
  } else if (exam < 5.0){
    average = (average + exam) / 2;
    console.log(`Aluno reprovado.`);
  }
  console.log(`Media final: ${average.toFixed(1)}`);
}

// console.log(n1);
// console.log(n2);
// console.log(n3);
// console.log(n4);
// console.log(average.toFixed(1));