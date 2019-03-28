import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { searchviews_routes } from './components/searchviews/searchviews.routes';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

export const app_routes: Routes = [
  { path: 'home', component: HomeComponent, children: searchviews_routes },
  { path: 'search', component: SearchComponent },
  { path: 'movie/:id', component: PeliculaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

