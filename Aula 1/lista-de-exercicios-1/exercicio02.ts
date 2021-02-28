import * as rs from 'readline-sync';

console.log('Calcule sua média');
let n1 = parseFloat(rs.question('1º Nota: '));
let n2 = parseFloat(rs.question('2º Nota: '));
let n3 = parseFloat(rs.question('3º Nota: '));

let media = ((n1 * 0.20)+ (n2 * 0.30) + (n3 * 0.50)) / 3;

console.log(`Sua media final é: ${media}`);
