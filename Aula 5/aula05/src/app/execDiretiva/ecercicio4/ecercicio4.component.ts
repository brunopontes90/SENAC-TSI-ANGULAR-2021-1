import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecercicio4',
  templateUrl: './ecercicio4.component.html',
  styleUrls: ['./ecercicio4.component.css']
})
export class Ecercicio4Component implements OnInit {
  num1 = 0;
  num2 = 0;
  resultado = 0;
  constructor() { }

  ngOnInit(): void {
  }

  validar(op: string): void{
    switch(op){
      case '+':
        this.resultado = this.num1 + this.num2;
        break;
      case '-':
        this.resultado = this.num1 - this.num2;
        break;
      case '*':
        this.resultado = this.num1 * this.num2;
        break;
      case '/':
        this.resultado = this.num1 / this.num2;
        break;
    }
  }

}
