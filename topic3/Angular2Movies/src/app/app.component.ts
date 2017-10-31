import { Component, OnInit } from '@angular/core';
import { Movie } from './models/movie';
import { MovieService } from './services/movie.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Movie list page';
  movies: Movie[];
  selectedMovie: Movie;

  constructor(private movieService: MovieService) { }

      getMovies(): void {
          this.movieService.getMovies().then(movies => this.movies = movies);
      }

      ngOnInit(): void {
          this.getMovies();
      }

      onSelect(movie: Movie): void {
          this.selectedMovie = movie;
      }
}
