import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.css']
})
export class Exercicio3Component implements OnInit {
  petroleo = 'petroleo';
  petrorbras(pet: string): string{
    return pet.toUpperCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
