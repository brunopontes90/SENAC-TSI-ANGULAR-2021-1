import * as rs from "readline-sync";

let valor: Number[]=[rs.question("Digite um valor: ")];
do{
    for(let elemento of valor){
        console.log(`${elemento}`);
    }

}while(valor);

//NÃO CONSEGUI