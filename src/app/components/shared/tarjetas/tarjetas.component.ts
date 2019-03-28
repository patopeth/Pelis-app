import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent implements OnInit {
@Input() items: any[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verPelicula(item: any) {
    let id = item.id;

    this.router.navigate(['/movie', id]);
  }
}
