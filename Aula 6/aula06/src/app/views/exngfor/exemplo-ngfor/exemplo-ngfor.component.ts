import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-ngfor',
  templateUrl: './exemplo-ngfor.component.html',
  styleUrls: ['./exemplo-ngfor.component.css']
})
export class ExemploNgforComponent implements OnInit {

  estados = ['SP', 'RJ', 'BA', 'PE', 'RS', 'ES'];

  jogos = ['Genshin Impact', 'Cyberpunk 2077', 'The Last of Us Part II', 'Red Dead Redemption II', 'Among us'];
  notas = [82, 85, 93, 97, 83];

  constructor() { }

  ngOnInit(): void {
  }

}
