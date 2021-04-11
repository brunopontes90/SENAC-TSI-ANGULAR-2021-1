import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  templateUrl: './exercicio2.component.html',
  styleUrls: ['./exercicio2.component.css']
})
export class Exercicio2Component implements OnInit {

  paises = ['Canadá', 'Alemanha', 'Holanda', 'Irlanda'];
  capitais = ['Ottawa', 'Berlim', 'Amsterdã', 'Dublin'];
  constructor() { }

  ngOnInit(): void {
  }

  impirmeCapital(pos: number): void{
    alert(this.capitais[pos]);
  }

}
