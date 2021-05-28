import * as rs from 'readline-sync';

let ladoA = parseFloat(rs.question('Lado "A" do triangulo: '));
let ladoB = parseFloat(rs.question('Lado "B" do triangulo: '));
let ladoC = parseFloat(rs.question('Lado "C" do triangulo: '));

if((ladoA >= ladoB + ladoC) || (ladoB >= ladoA + ladoC) || (ladoC >= ladoA + ladoB) || (ladoA <= 0) || (ladoB <= 0) || (ladoC <= 0)){
    console.log('Não forma triangulo');
}else if((ladoA === ladoB) && (ladoB === ladoC)){
    console.log('Triangulo isóceles');
}else if((ladoA === ladoB) || (ladoB === ladoC) || (ladoA === ladoC)){
    console.log('Triangulo eqilatero');
}else{
    console.log('Triangulo escaleno');
}