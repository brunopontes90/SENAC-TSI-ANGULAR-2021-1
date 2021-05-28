import * as rs from 'readline-sync';

let tabuada: number = (rs.question('Qual tabuada deseja? '));
let mult: Number = 0;
for (let i = 0; i <= 10; i++) {
    mult = tabuada * i;
    console.log(`${tabuada} x ${i} = ${mult}`);
}