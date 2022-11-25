import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesFavouritesComponent } from './movies-favourites.component';

describe('MoviesFavouritesComponent', () => {
  let component: MoviesFavouritesComponent;
  let fixture: ComponentFixture<MoviesFavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesFavouritesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
