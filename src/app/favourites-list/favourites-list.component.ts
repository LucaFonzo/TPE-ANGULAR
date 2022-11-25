import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesFavouritesService } from '../movies-favourites.service';
import { Movies } from '../movies-list/movies';

@Component({
  selector: 'app-favourites-list',
  templateUrl: './favourites-list.component.html',
  styleUrls: ['./favourites-list.component.css'],
})
export class FavouritesListComponent implements OnInit {
  favouriteList$!: Observable<Movies[]>;
  constructor(
    private list: MoviesFavouritesService,
    private favouritesListService: MoviesFavouritesService
  ) {
    this.favouriteList$ = list.favouritesList;
  }

  ngOnInit(): void {}

  removeFavourites(movie: Movies): void {
    this.favouritesListService.removeFavourites(movie);
  }
}
