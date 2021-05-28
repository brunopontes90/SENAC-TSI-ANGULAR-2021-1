import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  templateUrl: './exercicio2.component.html',
  styleUrls: ['./exercicio2.component.css']
})
export class Exercicio2Component implements OnInit {

  cachorro = '';
  imgSource = '';

  constructor() { }

  ngOnInit(): void {
  }

  raca(): void {
    if (this.cachorro === 'pitbull') {
      this.imgSource = '/assets/pitbull.jpg';
    }else if (this.cachorro === 'vira lata') {
      this.imgSource = '/assets/vira-lata.jpg';
    }else if(this.cachorro === 'pastor alemao'){
      this.imgSource = '/assets/pastor-alemao.jpg';
    }else{
      // SERA TRATADO DEPOIS COM DIRETIVAS PARA NAO PRECISAR RETORNAR IMG
      this.imgSource = '/assets/erro-dog.jpg';
    }
  }

  limpar(): void{
    this.cachorro = '';
    this.imgSource = '';
  }
}
