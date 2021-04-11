import * as rs from 'readline-sync';

let num1 = Number(rs.question('Digite o 1º valor: '));
let num2 = Number(rs.question('Digite o 2º valor: '));
console.log('Operações da calculadora: [+] [-] [*] [/]');
let opcao = String(rs.question('Digite a operação desejada: '));

function calculadora (num1: number, num2: number) {
    if(opcao === '+'){
        return num1 + num2;
    }else if(opcao === '-'){
        return num1 - num2;
    }else if(opcao === '*'){
        return num1 * num2;
    }else if(opcao === '/'){
        return num1 / num2;
    }
}

let res = calculadora(num1, num2);
console.log(`Resultado: ${res}`);