import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';
import { MaterialModule } from '../../material/material/material.module';



@NgModule({
  declarations: [
    AgregarComponent,
    MainPageComponent,
    PersonajesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports:[
    MainPageComponent
  ],
  providers:[
    DbzService
  ]
})
export class DbzModule { }
