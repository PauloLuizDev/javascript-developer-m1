
// 3 Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
// Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
// O salário a ser transferido é calculado da seguinte maneira: 
   
//    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

// Para calcular o percentual de imposto segue as aliquotas:

//     De R$ 0.00 a R$ 1100.00 = 5.00%
//     De R$ 1100.01 a R$ 2500.00 = 10.00%
//     Maior que R$ 2500.00 = 15.00%

//     Exemplo:
//         Entrada:
//             2000
//             250

//         Saída:
//             2050.00

const { gets, print } = require('./funcoes-auxiliares-ex3');

function calculaImposto(bruto, beneficio){
    const isPositivo = bruto > 0;
    let salario;

    if (isPositivo){
        bruto < 1100 ? salario = bruto + beneficio - (bruto * 0.05) :
        bruto < 2500 ? salario = bruto + beneficio - (bruto * 0.1) :
        salario = bruto + beneficio - (bruto * 0.15);
    }

    return salario;
}

function printImposto(salario){
    print ("Saida: \n\t" + salario);
}

function main(){
    console.clear();
    console.log("Exericio3\n\nSalárioSys: \n")

    console.log("Entrada")
    
    const bruto = gets();
    const beneficio = gets();

    print("\tBruto: " + bruto);
    print("\tbeneficio: " + beneficio);

    salario = calculaImposto(bruto, beneficio);
    printImposto(salario);
}

main();