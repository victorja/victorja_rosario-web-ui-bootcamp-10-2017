import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Movie } from './movie';

@Injectable()
export class MovieService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private moviesUrl = 'api/movies';  // URL to web api ACA puede fallar dijo tusan

  constructor(private http: Http) { }

  getHeroes(): Promise<Movie[]> {
    return this.http.get(this.moviesUrl)
               .toPromise()
               .then(response => response.json().data as Movie[])
               .catch(this.handleError);
  }


  getHero(movieName: number): Promise<Movie> {
    const url = `${this.moviesUrl}/${movieName}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Movie)
      .catch(this.handleError);
  }

  delete(movieName: number): Promise<void> {
    const url = `${this.moviesUrl}/${movieName}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(info: string): Promise<Movie> {
    return this.http
      .post(this.moviesUrl, JSON.stringify({info: info}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Movie)
      .catch(this.handleError);
  }

  update(hero: Movie): Promise<Movie> {
    const url = `${this.moviesUrl}/${hero.movieName}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

