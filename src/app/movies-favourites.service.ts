import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movies } from './movies-list/movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesFavouritesService {
  private _favouritesList: Movies[] = [];
  private _favouritesSubject: BehaviorSubject<Movies[]> = new BehaviorSubject(
    this._favouritesList
  );
  public favouritesList: Observable<Movies[]> =
    this._favouritesSubject.asObservable();
  constructor() {}

  addFavourites(movie: Movies): void {
    let item = this._favouritesList.find((v1) => v1.name == movie.name);
    if (!item) {
      this._favouritesList.push({ ...movie });
    }
    this._favouritesSubject.next(this._favouritesList);
  }
}

