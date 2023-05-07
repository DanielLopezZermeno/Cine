import { Component } from '@angular/core';
import { CarteleraServicioService } from '../cartelera-servicio.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
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
