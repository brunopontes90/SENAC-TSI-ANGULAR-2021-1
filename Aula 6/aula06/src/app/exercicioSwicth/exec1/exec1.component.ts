import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exec1',
  templateUrl: './exec1.component.html',
  styleUrls: ['./exec1.component.css']
})
export class Exec1Component implements OnInit {

  canais = ['https://www.youtube.com/channel/UCt_4wzTQqmcUvemNkeO0plA', 'https://www.youtube.com/channel/UCXDpWoUWeSWu_V1aiozYOGg', 'https://www.youtube.com/channel/UCn_brbCS3S2NJP5NueYAvyg'];
  nomes = ['ei nerd', 'planeta novo', 'nerd show'];

  constructor() { }

  ngOnInit(): void {
  }

}
