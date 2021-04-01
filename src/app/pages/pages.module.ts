import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { DbzModule } from './dbz/dbz.module';
import { HeroeComponent } from './heroe/heroe/heroe.component';
import { MaterialModule } from '../material/material/material.module';
import { LoginComponent } from './login/login.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { FormularioDireccionComponent } from './formulario-direccion/formulario-direccion.component';
import { TablasComponent } from './tablas/tablas.component';
import { ArbolComponent } from './arbol/arbol.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { GiphyModule } from './giphy/giphy.module';


@NgModule({
  declarations: [
    CardComponent,
    HomeComponent,
    HeroeComponent,
    LoginComponent,
    FormulariosComponent,
    NavComponent,
    FormularioDireccionComponent,
    TablasComponent,
    ArbolComponent,
    DragDropComponent


  ],
  imports: [
    PagesRoutingModule,
    DbzModule,
    MaterialModule,
    ReactiveFormsModule,
    LayoutModule,
    CommonModule,
    DragDropModule,
    GiphyModule


  ],
  exports:[
    PagesRoutingModule

  ]
})
export class PagesModule { }
