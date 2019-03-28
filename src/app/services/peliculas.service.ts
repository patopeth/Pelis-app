import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

private apiKey = "618e355c608864fb9be145c132154c13";
private urlMoviedb = "https://api.themoviedb.org/3";

  constructor(private http: HttpClient) { }

getPopulares() {
  let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

  return this.http.jsonp(url, '')
                  .pipe(take(1), map((res) => {
                    console.log(res['results']); 
                    return res['results'];
                  }));
}

getNinos() {
  // tslint:disable-next-line:max-line-length
  let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

  return this.http.jsonp(url, '')
                  .pipe(take(1), map((res) => {
                    console.log(res['results']); 
                    return res['results'];
                  }));
}

getActuales() { 
  let desde = new Date();
  let hasta = new Date();
  hasta.setDate(hasta.getDate() + 7);

  let desdeStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDay()}`;
  let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDay()}`;

    // tslint:disable-next-line:max-line-length
  let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

  return this.http.jsonp(url, '')
                  .pipe(take(1), map((res) => {
                    console.log(res['results']); 
                    return res['results'];
                  }));
}


buscarPeliculas(id: number) {
  let url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

  return this.http.jsonp(url, '')
  .pipe(map((res) => {
    console.log(res); 
    return res;
  }));
}

}
