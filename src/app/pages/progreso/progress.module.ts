import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { GraficaComponent } from './grafica/grafica.component';



@NgModule({
  declarations: [
    ProgressComponent,
    IncrementadorComponent,
    GraficaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports:[
    ProgressComponent
  ]
})
export class ProgressModule { }
