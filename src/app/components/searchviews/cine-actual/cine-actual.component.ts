import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-cine-actual',
  templateUrl: './cine-actual.component.html',
  styleUrls: []
})
export class CineActualComponent implements OnInit {
  peliculas: any[] = [];
  loading = false;

  constructor(private _pelisService: PeliculasService) { }

  ngOnInit() {
    this.loading = true;

    this._pelisService.getActuales()
    .subscribe(pelis => {
      this.peliculas = pelis;

      setTimeout(() => {
        this.loading = false;
      }, 1000);
     
    });
  }
}
