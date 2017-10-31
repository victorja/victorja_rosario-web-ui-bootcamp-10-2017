import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

import { MovieService } from './services/movie.service';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
