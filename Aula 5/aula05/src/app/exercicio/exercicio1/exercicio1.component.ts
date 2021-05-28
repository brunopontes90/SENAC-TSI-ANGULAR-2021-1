import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.component.html',
  styleUrls: ['./exercicio1.component.css']
})
export class Exercicio1Component implements OnInit {
  num1 = '';
  num2 = '';
  soma = '';
  constructor() { }

  ngOnInit(): void {
  }

  somando(): void{
    this.soma = this.num1 + this.num2;
  }

  limpar(): void{
    this.num1 = '';
    this.num2 = '';
    this.soma = '';
  }

}
