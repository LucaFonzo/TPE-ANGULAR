import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FavouritesListComponent } from './favourites-list/favourites-list.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesHomeComponent } from './movies-home/movies-home.component';
import { MoviesFavouritesComponent } from './movies-favourites/movies-favourites.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FavouritesListComponent,
    MoviesListComponent,
    MoviesHomeComponent,
    MoviesFavouritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
