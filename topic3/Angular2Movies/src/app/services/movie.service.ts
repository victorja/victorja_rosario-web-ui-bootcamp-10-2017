import { Injectable } from '@angular/core';
import { MOVIES } from '../models/mock-movies';
import { Movie } from '../models/movie';

@Injectable()
export class MovieService {

  constructor() { }
  getMovies(): Promise<Movie[]> {
    return Promise.resolve(MOVIES);
}
}
