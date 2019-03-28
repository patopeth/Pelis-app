import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html'
})
export class PeliculaComponent implements OnInit {
  loading = false;
  pelicula: any;

  constructor(private _activatedRoute: ActivatedRoute,
    private _pelisService: PeliculasService) { }

  ngOnInit() {
   let id: number;
   this.loading = true;

    this._activatedRoute.params.subscribe(params => id = params['id']);
    console.log(id);
    
    this._pelisService.buscarPeliculas(id)
                .subscribe(peli => {
                  this.pelicula = peli;
                  this.loading = false;
                });
  }

}
