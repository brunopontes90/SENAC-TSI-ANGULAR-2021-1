import * as rs from 'readline-sync';

let num = Number(rs.question('Digite um valor: '));
if(num % 2 == 0){
    console.log(`${num} é par`);
}else{
    console.log(`${num} é impar`);
}