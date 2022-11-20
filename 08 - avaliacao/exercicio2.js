
// 2 Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const {gets, print} = require('./funcoes-auxiliares-ex2');

function main () {
    console.clear();
let maiorValor = 0;
let menorValor = 10;

print("Sequência Fornecida: ");
for (let i = 0 ;i <= 5; i++) {

    valorEntrada = gets();
    print("[" + i + "]: " + valorEntrada);

    if ( valorEntrada % 2 == 0) {
        if(valorEntrada > maiorValor) {
            maiorValor = valorEntrada;

        } 
    } else if(valorEntrada < menorValor) {
        menorValor = valorEntrada;
    }
}

print("O maior valor PAR da SEQUENCIA fornecida é: " + maiorValor);
print("O menor valor INPAR da SEQUENCIA fornecida é: " + menorValor);
}

main();