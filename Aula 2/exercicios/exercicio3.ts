import * as rs from "readline-sync";

let num = Number(rs.question("Digite um valor: "));

function retorna(num: Number): String{
    if(num < 0){
        return `${num}: Negativo`;
    }else if(num >= 1){
        return `${num}: Positivo`;
    }else if(num === 0){
        return `${num}: Zerado`;
    }
}

let resultado = retorna(num);
console.log(resultado);