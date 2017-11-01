import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(  private movieService: MovieService,
                private router: Router) { }

      getMovies(): void {
          this.movieService.getMovies().then(movies => this.movies = movies);
      }

      ngOnInit(): void {
          this.getMovies();
      }

      onSelect(movie: Movie): void {
          this.selectedMovie = movie;
      }

      goToDetail(): void {
        this.router.navigate(['/detail', this.selectedMovie.id]);
    }

}
