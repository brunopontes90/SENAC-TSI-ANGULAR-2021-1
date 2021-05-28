import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio5',
  templateUrl: './exercicio5.component.html',
  styleUrls: ['./exercicio5.component.css']
})
export class Exercicio5Component implements OnInit {
  imgSource = '/assets/dAce.jpeg';
  constructor() { }

  ngOnInit(): void {
  }

toggleImg(): void{
  if(this.imgSource === '/assets/dAce.jpeg'){
  this.imgSource = '/assets/luffy.jpg';
  }else{
    this.imgSource = '/assets/dAce.jpeg';
  }
}

}
