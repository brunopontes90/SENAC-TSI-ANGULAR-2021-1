import * as rs from 'readline-sync';

let nota1 = Number(rs.question('Digite a 1º nota: '));
let nota2 = Number(rs.question('Digite a 2º nota: '));
let nota3 = Number(rs.question('Digite a 3º nota: '));
let media = Number(nota1 + nota2 + nota3) / 3;

if((8 <= media) && (media <= 10)){
    console.log('Nota A');
}else if((7 <= media) && (media <= 8)){
    console.log('Nota B');
}else if((5 <= media) && (media <= 7)){
    console.log('Nota C');
}else if((4 <= media) && (media <= 5)){
    console.log('Nota D');
}else if((0 <= media) && (media <= 4)){
    console.log('Nota E');
}