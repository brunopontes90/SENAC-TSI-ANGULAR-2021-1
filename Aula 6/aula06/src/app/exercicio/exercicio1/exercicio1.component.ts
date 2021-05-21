import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.component.html',
  styleUrls: ['./exercicio1.component.css']
})
export class Exercicio1Component implements OnInit {

  imgs = ['pastor-alemao.jpg','pitbull.jpg','vira-lata.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

  exibirNome(img: string): void{
    alert(img);
  }

}
