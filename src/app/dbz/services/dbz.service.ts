import { Injectable } from '@angular/core';
import { Personaje } from '../main-page/main-page.component';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

   private _personajes: Personaje[] = [
     {
      nombre:"kylian",
      poder: 999999},
     {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
   ];

  

  //Obtener una variable privada de un servicio con get

  //La funcion get, queda escuchando cuando se almacenen personajes
  //en el objeto privado del servicio
  get personajes(): Personaje[]{

    return [...this._personajes]; // se aplica [...this._personajes], para que no sea manipulado por terceras personas
  //return this._personajes; //retorna una variable privada
  }

  constructor() {}

  agregarPersonaje(pj :Personaje){
    this._personajes.push( pj );
  }


}
