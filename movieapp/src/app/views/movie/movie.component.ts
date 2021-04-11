import { from } from 'rxjs';
import { Movie } from './../../model/movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  // movies: Movie[];
  // movies?: Movie[];
  // movies: Movie[] = new Movies();

  movies = new Array<Movie>(); // NÃO TEM : PORQUE JA ESTA INICIALIZADO
  selectMovie?: Movie;

  constructor() {
    const alien = new Movie('Alien', 4); // VALOR E NOTA
    this.movies.push(alien); // COLOCA NA POSIÇÃO DISPONIVEL
    // alert(this.movies[0].rating); // EXIBE O QUE ESTA NA POSIÇÃO ZERO

    // INSTANCIA
    const parasite = new Movie('Parasite', 5);
    this.movies.push(parasite);

    // IMPIRMINDO O CALOR DO INDICE 1
    // alert(this.movies[1].name);

    const soul = new Movie('Soul', 5);
    this.movies.push(soul);
   }

  ngOnInit(): void {
  }

  // QUANDO CHAMAR A FUNÇÃO, PRECISA PASSAR UM FILME COMO PARAMETRO
  setMovie(movie: Movie): void{
    // GUARDA O FILME SELECIONADO
    this.selectMovie = movie;
  }

  // APONTA PARA NOVO FILME
  newMovie(): void{
    this.selectMovie = new Movie('', 0);
    this.movies.push(this.selectMovie);
  }

  remove(pos: number): void{
    this.movies.splice(pos, 1); //splice REMOVE POR POSIÇÃO
  }
}
