import  * as rs from 'readline-sync';

console.log("(1-Adição), (2-Subtração), (3-multiplição), (4-Divisão)");
let opcao = Number(rs.question("Digite a operacao: "));

let num1 = Number(rs.question("Digite 1° valor inteiro: "));
let num2 = Number(rs.question("Digite 2° valor inteiro: "));

switch(opcao){
    case 1:
        console.log(`Resultado: ${num1} + ${num2} = ${num1 + num2}`);
        break;
    case 2:
        console.log(`Resultado: ${num1} - ${num2} = ${num1 - num2}`);
        break;
    case 3:
        console.log(`Resultado: ${num1} * ${num2} = ${num1 * num2}`);
        break
    case 4:
        console.log(`Resultado: ${num1} / ${num2} = ${num1 / num2}`);
        break;
    default:
        console.log("Erro!");
}

