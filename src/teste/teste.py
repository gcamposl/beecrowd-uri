# // 1. Escreva um algoritmo que receba um texto como entrada e precisará retornar
# // se ele é ou não um palíndromo. Sendo 1 para o caso de ser palíndromo e 0 quando não for.
# // neon
# // subinoonibus
# // luzazul
# // escada

# //['n','e','a','o','n']
# // const palavra = 'Subi No Onibus'.replace(' ', '').toLowerCase();
# // const size = palavra.length - 1;

# // for (let i = 0, j = size; i < size / 2; i++, j--) {
# //   if (palavra[i] != palavra[j]) {
# //     return console.log(0);
# //   }
# // }
# // return console.log(1);

# // 3. Escreva um algoritmo que encontre o maior e o menor número de uma lista de inteiros.

# // Explicação: Dado uma lista de inteiros como entrada, o algoritmo precisará retornar o maior e o menor número dentro da lista de inteiros

# // [10, 7, -1, 4, 72, -34, 0, 2, 3]

# // const array = [-33, -7, -1, -4, -72, -34, 0, -2, -34];

# // function maiorMenor(array) {
# //   let maior = array[0]; // 10,
# //   let menor = array[0]; // 10,
# //   // array[i]
# //   for (let i = 0; i < array.length - 1; i++) {
# //     if (array[i] > maior) {
# //       maior = array[i];
# //     } else if (array[i] < menor) {
# //       menor = array[i];
# //     }
# //   }

# //   return [maior, menor];
# // }

# // const valores = maiorMenor(array);

# // console.log(`maior: ${valores[0]} || menor: ${valores[1]}`);

# // 5. Escreva um algoritmo que simule o funcionamento de um caixa eletrônico.
# // Explicação: Deverá receber o valor desejado de saque e ele retornará à quantidade de cédulas de cada valor.
# // As cédulas consideradas pelo caixa eletrônico são: 100, 50, 20, 10, 5 e 2.
# // Deve ser retornado a menor quantidade de cédulas possível para o valor do saque.

# // Ex: 175 reais

# // Quantidade de Cédulas:
# // Cédula: 100 - Quantidade: 1
# // Cédula: 50- Quantidade: 1
# // Cédula: 20- Quantidade: 1
# // Cédula: 5- Quantidade: 1

valor = 576
notas = [100, 50, 20, 10, 5, 2]
rest = int(valor)
print(rest)
quantidade = 0
print("Quantidade de Cédulas:")
for nota in notas:
    quantidade = int(rest / int(nota))
    print(f"Cédula: {nota} - Quantidade: {quantidade}")
    rest = rest % nota
    if rest == 1 or rest == 3:
        quantidade -= 1
        rest = rest + nota
        print(f"Cédula: {nota} - Quantidade: {quantidade}")
    else:
        quantidade = int(rest / int(nota))
        print(f"Cédula: {nota} - Quantidade: {quantidade}")
