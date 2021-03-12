import * as rs from  'readline-sync';

// MINUTOS NA SEMANA
let tempoDeJogo =  parseInt (rs.question('Quanto tempo de jogo (em min): '));
let tempo = tempoDeJogo * 60 * 1000; //30 MINUTOS

//DIAS DA SEMANA
let diasDaSemana = parseInt(rs.question('Quantos dias na semana em horas: '));
let qtd = diasDaSemana * 24; // 3 DIAS PARA DAR 72 HORAS

//1 ANO
let diasNoAno = 365;

//CALCULO
let result = Math.round(tempo + qtd) / diasNoAno;

console.log(`Você jogou ${result} horas em 1 ano`);
