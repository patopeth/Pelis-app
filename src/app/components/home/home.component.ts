import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit, OnDestroy {

  peliculas: any[] = [];

  constructor(private _pelisService: PeliculasService) { }

  ngOnInit() {

    this._pelisService.getPopulares()
    .subscribe(pelis => this.peliculas = pelis);
  }

  buscarPeliculas(texto: string) {
    this._pelisService.buscarPeliculas(texto)
    .subscribe(pelis => this.peliculas = pelis);
  }

  ngOnDestroy(): void {
  }


}
