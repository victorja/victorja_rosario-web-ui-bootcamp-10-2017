import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

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
