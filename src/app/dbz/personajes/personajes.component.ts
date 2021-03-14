import { Component, OnInit, Input } from '@angular/core';
import { Personaje } from '../main-page/main-page.component';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  //Preparando el array que llega desde main-page
  //@Input() personajes: Personaje[] = [];
  //Preparando el objeto que llega desde main-page
  //Inicializo el objeto como vacio
  /*@Input() nuevo : Personaje =
  {
    nombre:'',
    poder:0
  };
*/
  //Obtener los datos del Servicio
  get get_personajes(){
    return this._dbzServicio.personajes;
  }

  //Obtener Lista de personajes del Servicio
  personajes: Personaje[]=this._dbzServicio.personajes;

  constructor(private _dbzServicio: DbzService){
   
  }






}
