import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecercicio2',
  templateUrl: './ecercicio2.component.html',
  styleUrls: ['./ecercicio2.component.css']
})
export class Ecercicio2Component implements OnInit {

  numero: number = 0;
  retorno = '';

  constructor() { }

  ngOnInit(): void {
  }

  validaPar(): void{
    if(this.numero == 0){
      this.retorno = 'É zero'
    }else if(this.numero > 0){
      this.retorno = 'É positivo'
    }else{
      this.retorno = 'É negativo';
    }
  }

}
