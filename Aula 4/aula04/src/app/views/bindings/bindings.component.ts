import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  nome = 'Bruno';
  cor = 'purple';
  url = '/assets/dAce.jpeg';
  cssClass = 'outraClasse';
  inputStyle = 'background-color: red';

  constructor() { }

  ngOnInit(): void {
  }

somar(val1: number, val2: number): number {
  return val1 + val2;

}

devolverMsg(): string{
  return 'É nóis que voa, bruxão';
}

trolar(): void{
  alert('Eu não sou o botão de download certo');
  this.inputStyle = 'background-color: blue';
}



}
