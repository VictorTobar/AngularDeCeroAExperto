import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

export interface Personaje{
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo : Personaje = 
  {
    nombre: 'Mestro Roshi',
    poder:  1000
  } 

//constructor(private _dbzService: DbzService ){}
constructor(){}


  /*
  guardarObjeto(argumento: Personaje){
    //debugger;
    console.log("guardarObjeto: ",argumento);
    this.personajes.push(argumento);

  }
*/
}
