import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecercicio3',
  templateUrl: './ecercicio3.component.html',
  styleUrls: ['./ecercicio3.component.css']
})
export class Ecercicio3Component implements OnInit {
  whatsapp = '';
  email = '';
  opcao = '';

  retornaWhats = '';
  retornaEmail = '';

  constructor() { }

  ngOnInit(): void {
  }

  validar(): void{
    if(this.opcao === this.whatsapp){
      this.retornaWhats = this.whatsapp;
    }
  }
}
