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
    nombre: 'Maestro Roshi',
    poder:  1000
  } 

  click: boolean = true;

//constructor(private _dbzService: DbzService ){}
constructor(){}


mostrar(botonPresionado: boolean): boolean{

  if(botonPresionado == false){
    this.click = true;
  }else{
    this.click = false;
  }

  return this.click;
}

  /*
  guardarObjeto(argumento: Personaje){
    //debugger;
    console.log("guardarObjeto: ",argumento);
    this.personajes.push(argumento);

  }
*/
}
