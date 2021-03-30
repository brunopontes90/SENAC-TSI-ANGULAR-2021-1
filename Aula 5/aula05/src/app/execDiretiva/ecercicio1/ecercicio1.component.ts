import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecercicio1',
  templateUrl: './ecercicio1.component.html',
  styleUrls: ['./ecercicio1.component.css']
})
export class Ecercicio1Component implements OnInit {

  numero: number = 0;
  retorno = '';

  constructor() { }

  ngOnInit(): void {
  }

  validaPar(): void{
    if(this.numero >= 0){
      this.retorno = 'É positivo'
    }else{
      this.retorno = 'É negativo';
    }
  }

}
