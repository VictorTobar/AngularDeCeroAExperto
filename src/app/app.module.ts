import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { contadorComponent } from './contador/contador.component';
import { HeroeComponent } from './heroe/heroe/heroe.component';
import { ListadoComponent } from './heroe/listado/listado.component';
import { MainPageComponent } from './dbz/main-page/main-page.component';

//MODULOS
import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent,
    contadorComponent,
    HeroeComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
