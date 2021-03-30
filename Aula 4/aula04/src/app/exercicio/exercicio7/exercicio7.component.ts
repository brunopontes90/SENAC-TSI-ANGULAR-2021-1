import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio7',
  templateUrl: './exercicio7.component.html',
  styleUrls: ['./exercicio7.component.css']
})
export class Exercicio7Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

classDiv1 = '';
classDiv2 = '';
classDiv3 = '';

trocaDiv(div: number): void{
  if(div === 1){
    this.classDiv1 = 'shown';
    this.classDiv2 = 'hidden';
    this.classDiv3 = 'hidden';
  } else if(div === 1){
    this.classDiv1 = 'hidden';
    this.classDiv2 = 'shown';
    this.classDiv3 = 'hidden';
  }else{
    this.classDiv1 = 'hidden';
    this.classDiv2 = 'hidden';
    this.classDiv3 = 'shown';
  }
}

}
