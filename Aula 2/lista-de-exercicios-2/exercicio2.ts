import * as rs from 'readline-sync';

let pokemon: Array<String>;
console.log(pokemon = ['Pikachu', 'Charizard', 'Chicorita']);
let pergunta = String(rs.question('Qual o pokemon preferido do Ash? '));

switch(pergunta){
    case 'Pikachu':
        console.log(`Sua resposta: ${pergunta}`);
        for (let i = 0; i < pokemon.length; i++) {
        }
        console.log(`Correto: ${pokemon[0]}`);
        break;
    case 'Charizard':
        console.log(`Sua resposta: ${pergunta}`);
        for (let i = 0; i < pokemon.length; i++) {
        }
        console.log(`Errado, o correto é: ${pokemon[0]}`);
        break;
    case 'Chicorita':
        console.log(`Sua resposta: ${pergunta}`);
        for (let i = 0; i < pokemon.length; i++) {
        }
        console.log(`Errado, o correto é: ${pokemon[0]}`);
        break;
    default:
        console.log('Erro! Tente novamente');
        break;
}
