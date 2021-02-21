import * as rs from 'readline-sync';

console.log('Calcule sua média');
let n1 = parseFloat(rs.question('1º Nota: '));
let n2 = parseFloat(rs.question('2º Nota: '));
let n3 = parseFloat(rs.question('3º Nota: '));

let media = (n1 + n2 + n3) / 3;

console.log(`Sua media final é: ${media}`);
