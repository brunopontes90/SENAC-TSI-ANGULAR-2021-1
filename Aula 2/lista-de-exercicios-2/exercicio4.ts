import * as rs from 'readline-sync';

let nota: number = 0;
let soma: number = 0;
let media: number = 0;
for (let i = 1; i <= 3; i++) {
    nota = Number(rs.question(`Digite a ${i}º nota: `));
    soma += (nota / 3);
}

media = soma;

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