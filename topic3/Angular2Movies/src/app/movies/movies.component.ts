import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from '../models/movie.model';
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

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        let newId: number;
        if(this.movies.length > 0) {
        newId = (this.movies.reduce((prev, current) => (prev.id > current.id) ? prev : current)).id;
        newId++;
        }else{
        newId = 1;
        }
        this.movies.push(new Movie(newId, name));
      }
      delete(movie: Movie): void {
        this.movies = this.movies.filter(m => m.name !== movie.name);
        }

      }


