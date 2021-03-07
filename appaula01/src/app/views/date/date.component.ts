import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dataAtual = new Date();
  valor = 10.50;
  constructor() { }

  ngOnInit(): void {

  }

}
