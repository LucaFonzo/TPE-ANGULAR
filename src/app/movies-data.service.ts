import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Movies } from './movies-list/movies';
const URL = 'https://6380f2e1786e112fe1bedb6d.mockapi.io/movies';
const DAYS_TO_BE_PREMIERE = 30;
@Injectable({
  providedIn: 'root',
})
export class MoviesDataService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Movies[]> {
    return this.http.get<Movies[]>(URL).pipe(
      tap((movies: Movies[]) =>
        movies.forEach((movie) => {
          if (movie.premiere_date > Date.now() - DAYS_TO_BE_PREMIERE) {
            movie.isPremiere = true;
          } else {
            movie.isPremiere = false;
          }
        })
      )
    );
  }
}
