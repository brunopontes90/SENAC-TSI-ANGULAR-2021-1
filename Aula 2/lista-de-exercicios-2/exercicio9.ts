import * as rs from 'readline-sync';


let nome: string;
let altura: number;
let maior: number;
let menor: number;
let aux: number;
let soma: number;

maior = menor;
menor = maior;
aux = maior;

for (let i = 1; i <= 2; i++) {
    nome = String(rs.question(`Digite a nome do ${i}° atleta: `));
    altura = Number(rs.question(`Digite a altura do ${i}° atleta: `));
    soma = soma + altura;

}

//NÃO CONSEGUI FAZER
