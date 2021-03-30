import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio6',
  templateUrl: './exercicio6.component.html',
  styleUrls: ['./exercicio6.component.css']
})
export class Exercicio6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  btn1 = 'btn1';
  btn2 = 'btn2';
  btn3 = 'btn3'

  toggleBtn(): void{
    if(this.btn1 == 'btn1'){
      document.write('Botão 1 clicado');
    }else if(this.btn2 == 'btn2'){
      document.write('Botão 2 clicado');
    }else {
      document.write('Botão 3 clicado');
    }
  }

}
