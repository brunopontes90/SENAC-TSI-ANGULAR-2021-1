export class Game{
  id?: number; // é bom deixar anulavel '?', iremos trabalhar com ele depois no back
  nome: string;
  genero = '';
  plataforma = '';
  status = 'na'; // 'na', não disponivel e afins

  constructor(nome: string){
    this.nome = nome;
  }
}
