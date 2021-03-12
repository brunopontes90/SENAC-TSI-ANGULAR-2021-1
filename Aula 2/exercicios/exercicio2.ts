import * as rs from "readline-sync";

let random = Math.floor(Math.random() * 10 + 1);
let num: Number;
do{
    num = Number(rs.question("Digite um valor inteiro de 1 a 10: "));
    console.log(`Digitou: ${num}`);
    console.log(`Aleatorio: ${random}`);
    
}while(num != random);