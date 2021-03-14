import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h3>{{title}}</h3>

        <button (click)="acumular(+base);">+ {{base}}</button>
        
        <span> {{numero}}</span>
        
        <button (click)="acumular(-base);">- {{base}}</button>
        
    
    `
})
export class contadorComponent{

      
  title: string = 'Contador App';
  numero: number = 10;
  
  base: number = 5;

acumular(valor: number){
  this.numero += valor;
}

}