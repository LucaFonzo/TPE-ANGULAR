import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesFavouritesComponent } from './movies-favourites/movies-favourites.component';
import { MoviesHomeComponent } from './movies-home/movies-home.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: MoviesHomeComponent,
  },
  {
    path: 'favourites',
    component: MoviesFavouritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
