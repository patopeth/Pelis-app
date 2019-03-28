import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-cine-ninos',
  templateUrl: './cine-ninos.component.html',
  styles: []
})
export class CineNinosComponent implements OnInit {
  peliculas: any[] = [];
  loading = false;

  constructor(private _pelisService: PeliculasService) { }

  ngOnInit() {
    this.loading = true;

    this._pelisService.getNinos()
    .subscribe(pelis => {
      this.peliculas = pelis;

      setTimeout(() => {
        this.loading = false;
      }, 1000);
     
    });
  }

}
