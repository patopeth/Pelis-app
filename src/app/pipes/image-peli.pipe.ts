import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePeli'
})
export class ImagePeliPipe implements PipeTransform {

  transform(pelicula: any, esDetallePeli: boolean = false): any {

    let url = "http://image.tmdb.org/t/p/w500";
    if (esDetallePeli) {
      if (pelicula.poster_path) {
        return url + pelicula.poster_path;
      } else {
        return 'assets/img/noimage.png';
      }
    }
    
    if (pelicula.backdrop_path) {
       return url + pelicula.backdrop_path;
    } else {
      if (pelicula.poster_path) {
        return url + pelicula.poster_path;
      } else {
        return 'assets/img/noimage.png';
      }
    }
  }

}
