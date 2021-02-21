import * as rs from 'readline-sync';

console.log('Calculo de produto');

let num1 = Number(rs.question('Numero 1 : '));
let num2 = Number(rs.question('Numero 2: '));
let num3 = Number(rs.question('Numero 3: '));

let result = num1 * num2 * num3;

console.log(`Produto: ${result}`);