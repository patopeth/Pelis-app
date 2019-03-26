import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit, OnDestroy {

  peliculas: any[] = [];
  loading = false;

  constructor(private _pelisService: PeliculasService) { }

  ngOnInit() {
    this.loading = true;

    this._pelisService.getPopulares()
    .subscribe(pelis => {
      this.peliculas = pelis;

      setTimeout(() => {
        this.loading = false;
      }, 2000);
     
    });
  }

  buscarPeliculas(texto: string) {
    this._pelisService.buscarPeliculas(texto)
    .subscribe(pelis => this.peliculas = pelis);
  }

  ngOnDestroy(): void {
  }


}
