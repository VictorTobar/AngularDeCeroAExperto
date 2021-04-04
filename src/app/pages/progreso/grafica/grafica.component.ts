import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent {

  @Input('data_input') doughnutChartData: MultiDataSet = [
    [ 40,60 ]
 
  ];

  @Output('valor_output') valorSalida: EventEmitter<number> = new EventEmitter();

  constructor(){
    console.log("progreso111: ",this.doughnutChartData);
    //console.log("progres1",this.progreso2);
  }
 // Doughnut
 public doughnutChartLabels: Label[] = ['Progress Celeste','Progress Azul'];
 
 public doughnutChartType: ChartType = 'doughnut';

 public colors: Color[] = [
   {backgroundColor: [ '#33ffe9', '#3f47df' ]}
 ];


}
