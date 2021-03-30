import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-ecercicio5',
  templateUrl: './ecercicio5.component.html',
  styleUrls: ['./ecercicio5.component.css']
})
export class Ecercicio5Component implements OnInit {

  imagem = ['/assets/pastro-alemao.jpg', '/assets/pitbuul.jpg', '/assets/vira-lata.jpg'];

  constructor() { }

  ngOnInit(): void {
  }
  retorno(): void{
    for (const i of this.imagem) {
      this.imagem = [i];
    }
  }

}
