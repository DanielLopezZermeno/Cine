import { Injectable } from '@angular/core';
import {Pelicula}from '../app/models/pelicula'
@Injectable({
  providedIn: 'root'
})
export class CarteleraServicioService {
  resultados:any[]=[];
  peliculas: Pelicula[] = [
    { titulo: 'Spider-Man: No Way Home', genero: 'Acción', duracion: '2h 28min' },
    { titulo: 'Matrix Resurrections', genero: 'Ciencia ficción', duracion: '2h 28min' },
    { titulo: 'El Cielo Rojo Sangre', genero: 'Terror', duracion: '2h 01min' },
    // Agregue más películas aquí si lo desea
  ];
  constructor() { 
  }

  setResultados(resultados:any[]){
    this.resultados=resultados;
  }
  buscarPeliculas(terminoBusqueda: string): any[] {
    // En este ejemplo, simulamos una búsqueda de películas en un array de películas
    // que se encuentra en el servicio CarteleraService. El resultado de la búsqueda
    // se devuelve como un array de objetos que contienen información de las películas
    // que coinciden con el término de búsqueda.
    const peliculasEncontradas = [];
    for (const pelicula of this.peliculas) {
      if (pelicula.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase())) {
        peliculasEncontradas.push(pelicula);
      }
    }
    return peliculasEncontradas;
  }
  
}
