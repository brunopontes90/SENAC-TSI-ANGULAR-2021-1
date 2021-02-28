import * as rs from 'readline-sync';

console.log('Conversão de Celsius para Kelvin e Fahrenheit');

let c = parseFloat(rs.question('Digite a temperatura em Celsius: '));

let f = c * 1.8 + 32;
let k = c + 273.15;

console.log(`Temperatura em Fahrenheit: ${f}`);
console.log(`Temperatura em Kelvin: ${k}`);