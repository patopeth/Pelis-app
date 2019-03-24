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

buscarPeliculas(texto: string) {
  let url = `${this.urlMoviedb}/search/movie?query=${texto}api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

  return this.http.jsonp(url, '')
  .pipe(map((res) => {
    console.log(res['results']); 
    return res['results'];
  }));
}

}
