import * as rs from 'readline-sync';


//DECALRAR VARIAVEIS
//STRING
const message: string = 'Olá mundo';

//NUMBER
let numero: number;
numero = 5;

//BOOLEAN
const flag: boolean = true;

//ANY
let qualquerCoisa: any;

//IMPRIMIR NO CONSOLE
console.log(message);

//USANDO O readline-sync
//PERGUNTA ALGO PARA O USER
const nome: string = rs.question('Nome: '); //(question)VEM DO READLINE, É ALGO PRONTO

console.log('Olá, ' + nome);
console.log(`Olá, ${nome}`);
