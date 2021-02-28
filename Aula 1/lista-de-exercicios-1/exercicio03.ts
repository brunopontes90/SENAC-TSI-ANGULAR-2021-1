import * as rs from 'readline-sync';

console.log('Calculo Area de um triangulo');
let base = parseInt(rs.question('Digite a base: '));
let altura = parseInt(rs.question('Digite a altura: '));

let area = (base * altura) / 2;

console.log(`A area do trinagulo é ${area}`);