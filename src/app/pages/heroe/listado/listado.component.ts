import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

heroes          : string[]= ['Goku','Bulma','Trunk','Vegeta'];
elementoBorrado : string = "Kylian";
arraRes         : string[] = [""];
bandera         : boolean = false;

borrarHeroe(): any { 
  console.log("borrando....!!");
  
  this.elementoBorrado = this.heroes.pop() || '';
  console.log(this.elementoBorrado);
  
    if(this.elementoBorrado == ""){
      console.log("el elemento que agrega esta vacio!");
      this.bandera = true;
    }else{
      this.arraRes.push(this.elementoBorrado);
    }
  
  //return this.elementoBorrado;
  console.log(this.arraRes);


}

}
