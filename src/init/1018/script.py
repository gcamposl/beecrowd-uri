#  let input = require('fs').readFileSync('stdin', 'utf8');
#  let rest = parseInt(input);
#  const notas = [100, 50, 20, 10, 5, 2, 1]
#  console.log(rest)
#  for (let nota of notas) {
#    let qtde = parseInt(rest / nota);
#    console.log(`${qtde} nota(s) de R$ ${nota},00`);
#    rest = rest % nota
#  }

value = int(input())

notas = [100, 50, 20, 10, 5, 2, 1]
rest = value
qtde = 0
for nota in notas:
    qtde = int(rest / nota)
    print(f"{qtde} nota(s) de R$ {nota},00")
    rest = rest % nota
