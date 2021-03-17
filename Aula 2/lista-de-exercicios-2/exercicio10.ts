import * as rs from 'readline-sync';

let word = String(rs.question('Digite uma palavra que comece com "P" e contenha "F": ').toUpperCase());

if(word.indexOf('F') !== -1 && word[0] == 'P'){
    console.log(`A palavra começa com a letra "P" na posição: ${word.indexOf('P', 0)}`);
    console.log(`A palavra possui 'F' na posição: ${word.indexOf('F')}`);
}else {
    console.log('A palavra não começa com a letra "P"');
    console.log('A palavra não possui "F"');
}

