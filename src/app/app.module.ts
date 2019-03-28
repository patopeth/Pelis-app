import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ImagePeliPipe } from './pipes/image-peli.pipe';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { app_routes } from './app.routes';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { TarjetasComponent } from './components/shared/tarjetas/tarjetas.component';
import { CineActualComponent } from './components/searchviews/cine-actual/cine-actual.component';
import { CinePopularComponent } from './components/searchviews/cine-popular/cine-popular.component';
import { CineNinosComponent } from './components/searchviews/cine-ninos/cine-ninos.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    ImagePeliPipe,
    LoadingComponent,
    TarjetasComponent,
    CineActualComponent,
    CinePopularComponent,
    CineNinosComponent,
    PeliculaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    RouterModule.forRoot(app_routes, { useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
