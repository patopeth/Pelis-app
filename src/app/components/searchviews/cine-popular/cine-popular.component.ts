import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-cine-popular',
  templateUrl: './cine-popular.component.html'
})
export class CinePopularComponent implements OnInit {

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
      }, 1000);
     
    });
  }

}
