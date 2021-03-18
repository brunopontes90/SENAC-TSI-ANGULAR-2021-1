import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  templateUrl: './exercicio4.component.html',
  styleUrls: ['./exercicio4.component.css']
})
export class Exercicio4Component implements OnInit {

url1 = '/assets/dAce.jpeg';
url2 = '/assets/luffy.jpg';
url3 = '/assets/OP.jpeg';
inputStyle = [this.url1, this.url2, this.url3];

clImg1 = 'classUrl1';
clImg2 = 'classUrl2';
clImg3 = 'classUrl3';

  constructor() { }

  ngOnInit(): void {
  }

}
