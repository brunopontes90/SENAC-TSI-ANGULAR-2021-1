import * as rs from 'readline-sync';

let palavra: string;
palavra = rs.question('Digite uma palavra que comece com "P" e contenha "F": ');
palavra.length;
console.log(palavra);