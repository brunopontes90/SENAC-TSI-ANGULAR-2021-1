import * as rs from 'readline-sync';

console.log('**************** Ano Bissexto ****************');
let ano = Number(rs.question('Digite o ano: '));

if(ano % 400 == 0 || (ano % 4 ==0) && (ano % 100 != 0)){
    console.log(`${ano} é bissexto`);
}else{
    console.log(`${ano} não é bissexto`);
}