import * as rs from "readline-sync";
// WHILE
let num = 3;
while(num <= 10){
    num++;
    console.log(num);
}


//DO WHILE
let nome: String;
do {
    nome = rs.question("Digite seu nome: ");
} while (nome === "");


//FOR
let repeticao = Number(rs.question("2 elevado a: "));
let result = 1;
for (let i = 0; i < repeticao; i++) {
    result = result * 2;
}

console.log(`Resultado: ${result}`);