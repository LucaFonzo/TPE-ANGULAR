import { TestBed } from '@angular/core/testing';

import { MoviesFavouritesService } from './movies-favourites.service';

describe('MoviesFavouritesService', () => {
  let service: MoviesFavouritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesFavouritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
