import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent{
 
  @Input('valor_input') progreso: number = 10; 
  @Input() btnClass: string = 'btn btn-primary'; 

  @Output('valor_output') valorSalida: EventEmitter<number> = new EventEmitter();

  constructor() { }

  
  cambiarValor(valor: number): any{

    if( this.progreso >= 100 && valor >= 0){
      this.valorSalida.emit(this.progreso);
      return this.progreso = 100;
    }

    if( this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(this.progreso);
      return this.progreso = 0;
    }

    this.progreso = this.progreso + valor;
 
    this.valorSalida.emit(this.progreso);

  }

  onChange(valor_input: number){

    if( valor_input >= 100){
      this.progreso = 100;
    }else if( valor_input <= 0){
      this.progreso = 0;
    } else {
      this.progreso = valor_input;
    }

    this.valorSalida.emit( this.progreso );
  }

}
