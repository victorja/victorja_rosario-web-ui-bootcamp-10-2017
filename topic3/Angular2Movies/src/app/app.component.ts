import { Component } from '@angular/core';

export class Movie {
  id: number;
  name: string;
}

const MOVIES: Movie[] = [
  { id: 11, name: 'Spongebob' },
  { id: 12, name: 'MIB' },
  { id: 13, name: 'Scooby Doo' },
  { id: 14, name: 'Superbad' },
  { id: 15, name: 'Spider-man' },
  { id: 16, name: 'Ratatouille' },
  { id: 17, name: 'Aladdin' },
  { id: 18, name: 'Lion King' },
  { id: 19, name: 'Cinderella' },
  { id: 20, name: 'Pinoccio' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie list page';
  movies: Movie[] = MOVIES;
  selectedMovie: Movie;

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
}
