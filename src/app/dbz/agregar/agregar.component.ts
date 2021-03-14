import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../main-page/main-page.component';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() personajes : Personaje[]= [];


  @Input() nuevo : Personaje = 
    {
      nombre: '',
      poder:  0
    }

    constructor(private _dbzService: DbzService){}

  //@Output() agregarOutput: EventEmitter<Personaje> = new EventEmitter();  

    //agregar(event:any){
      agregar(){  
        //trim() quita los espacios en blanco estando tanto derecha-izquierda 
        
        if(this.nuevo.nombre.trim().length == 0){
          console.log("no ingreso personaje!");
          return; //return, para que no retorne nada
        }
        
        this._dbzService.agregarPersonaje(this.nuevo);

        //this.agregarOutput.emit(this.nuevo);
        //debugger;
        //this.personajes.push(this.nuevo);
        
        //purgar el formulario (Inicializarlo en 0)
        
        this.nuevo = {
          nombre:'',
          poder: 0
        }
        
        
        //event.preventDefault(), hace que lo que se ejecute en consola se mantenga estatico 
        //y no desaparezca de la consola
        
        //event.preventDefault();
        //console.log(event);
        console.log(this.personajes);
    
      }

}
