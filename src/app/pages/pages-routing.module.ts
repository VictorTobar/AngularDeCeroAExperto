import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './dbz/main-page/main-page.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { HeroeComponent } from './heroe/heroe/heroe.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { NavComponent } from './nav/nav.component';
import { FormularioDireccionComponent } from './formulario-direccion/formulario-direccion.component';
import { ArbolComponent } from './arbol/arbol.component';
import { TablasComponent } from './tablas/tablas.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { GiphyComponent } from './giphy/giphy/giphy.component';
import { ProgressComponent } from './progreso/progress/progress.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dbz',
        component: MainPageComponent 
      },
      {
        path: 'card',
        component: CardComponent 
      }, 
      {
        path: 'heroe',
        component: HeroeComponent 
      },
      {
        path: 'formulario',
        component: FormulariosComponent 
      },
      {
        path: 'nav',
        component: NavComponent 
      },
      {
        path: 'formDireccion',
        component: FormularioDireccionComponent 
      },
      {
        path: 'tablas',
        component: TablasComponent 
      },
      {
        path: 'tree',
        component: ArbolComponent 
      },
      {
        path: 'drag-drop',
        component: DragDropComponent 
      },
      {
        path: 'giphy',
        component: GiphyComponent
      },
      {
        path: 'progress',
        component: ProgressComponent
      },
      {
        path: '**',
        redirectTo: 'drag-drop' 
      }

    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports:[
    RouterModule    
  ]
})
export class PagesRoutingModule { }
