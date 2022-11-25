import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';
import { MoviesFavouritesService } from '../movies-favourites.service';
import { Movies } from './movies';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  movies: Movies[] = [];
  constructor(
    private favouritesListService: MoviesFavouritesService,
    private moviesDataService: MoviesDataService
  ) {}

  ngOnInit(): void {
    this.moviesDataService
      .getAll()
      .subscribe((movies) => (this.movies = movies));
  }

  addFavourites(movie: Movies): void {
    this.favouritesListService.addFavourites(movie);
  }
}
