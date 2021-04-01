import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorGiphyComponent } from './buscador-giphy/buscador-giphy.component';
import { ListaGiphyComponent } from './lista-giphy/lista-giphy.component';
import { GiphyComponent } from './giphy/giphy.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    BuscadorGiphyComponent,
    ListaGiphyComponent,
    GiphyComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class GiphyModule { }
