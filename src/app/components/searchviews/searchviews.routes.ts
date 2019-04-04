import { Routes } from '@angular/router';
import { CinePopularComponent } from './cine-popular/cine-popular.component';
import { CineNinosComponent } from './cine-ninos/cine-ninos.component';
import { CineActualComponent } from './cine-actual/cine-actual.component';

export const searchviews_routes: Routes = [
  { path: 'cineactual', component: CineActualComponent },
  { path: 'cineninos', component: CineNinosComponent },
  { path: 'cinepopular', component: CinePopularComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'cineactual' }
];

