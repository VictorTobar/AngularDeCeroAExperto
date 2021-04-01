import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
})
export class DragDropComponent {

  title : string = "Administrador de Tareas";
  subtitle: string = "Arrastre las tareas de una columna a otra!!!";

  todo = [
    'Cerrar el semestre',
    'Reforzamiento de Lenguaje', 
    'Clases Particulares',
    'Clase de Matematicas'
  ];

  done = [
    'Listado de Alumnos',
    'Ingresar notas',
    'Reunion de Apoderado',
    'Reunion de Profesores',
    'Consejo de curso'
  ];

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
