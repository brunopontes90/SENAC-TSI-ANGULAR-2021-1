import  * as rs from 'readline-sync';

// IF ELSE
const idade = Number(rs.question("Quantos anos você tem? "));
if(idade >= 18){
    console.log("Você é maior de idade");
}else if(idade < 60 ){
    console.log("Você é idoso");
}else{
    console.log("Você não é idoso");
}

//SWITCH
const day = Number(rs.question("Qual dia da semana (1/7)? "));
switch(day){
    case 1:
        console.log("Segunda");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
         console.log("Erro, tente novamnete");
}