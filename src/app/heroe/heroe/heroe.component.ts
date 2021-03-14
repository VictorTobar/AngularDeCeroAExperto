import { Component } from "@angular/core";


@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    nombre: string =" Iron Man";
    edad: number = 31;
    nomb: string = "Iron Man";

obtenerNombre(){
    return `Nombre: ${this.nombre} - Edad: ${this.edad}`;
}

//get es una propiedad que sera procesada y funciona como una variable nativa
get nombreCapitalizado(){
    return this.nombre.toUpperCase();
}

cambiarEdad():void{
    this.edad = 29;
}

cambiarNombre():void{
    
this.nombre = "Daniela";

}

}