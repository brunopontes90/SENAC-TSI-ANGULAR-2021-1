import * as rs from 'readline-sync';


let soma: number = 0;
let numeros: number = 0;
for (let i = 1; i <= 10; i++) {
   numeros = Number(rs.question(`Digite o ${i}º numero: `));
   soma += numeros;
}

console.log(`Todos os numeros somados = ${soma}`);