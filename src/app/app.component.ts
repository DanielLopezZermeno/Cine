import { Component } from '@angular/core';
import { CarteleraServicioService } from './cartelera-servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cine';
  terminoBusqueda: string="";
    resultados:any=[];

    constructor(private carteleraService: CarteleraServicioService) {
      this.resultados= [];

    }
  
    buscar(event: Event) {
      event.preventDefault();
      this.resultados = this.carteleraService.buscarPeliculas(this.terminoBusqueda);
    }

}
