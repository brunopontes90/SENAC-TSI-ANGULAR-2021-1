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
  somar = '';
  div = '';
  mult = '';
  sub = '';
  constructor() { }

  ngOnInit(): void {
  }

  validar(): void{
    if (this.somar) {
      this.resultado = this.num1 + this.num2;
    }else if(this.div){
      this.resultado = this.num1 / this.num2;
    }else if(this.mult){
      this.resultado = this.num1 * this.num2;
    }else if(this.sub){
      this.resultado = this.num1 - this.num2;
    }
  }

}
