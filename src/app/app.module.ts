
//Modulos

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material/material/material.module';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { DbzModule } from './pages/dbz/dbz.module';
import { HttpClientModule } from '@angular/common/http';

//Componentes

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    MaterialModule,
    PagesRoutingModule,
    PagesModule,
    DbzModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
