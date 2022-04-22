import { Component } from '@angular/core';
import { Articulo } from '../models/articulo.model';

import Swal from 'sweetalert2';
import swal from 'sweetalert2';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent {

   //variables
    nueva:Articulo = new Articulo();
    lista:Articulo[]=[];
    
  //constructor

  constructor() { }


  //Funciones
  ngOnInit(): void {
  
   
    
  }
  
  ValidarArticulo(){
    
    if(this.nueva.codigo < 1){
      return 'Debe digitar un numero de codigo'
    }
    for(let item of this.lista){
      if(item.codigo == this.nueva.codigo){
        return 'Error, el Codigo ya existe'
      }
    }  
    if(this.nueva.nombre.length == 0){
      return 'Debe digitar un nombre'
    }
    if(this.nueva.precio < 1){
      return 'Debe digitar un valor numerico en precio'
    }
    if(this.nueva.impuesto < 0){
      return 'Debe digitar un valor numerico en impuesto'
    }
    if(this.nueva.impuesto > 100){
      return 'No se puede tener un impuesto mayor al 100%'
    }
    if(isNaN(this.nueva.codigo)){
      return 'Error, no se puede digitar letras en codigo'
    }
    if(isNaN(this.nueva.precio)){
      return 'Error, no se puede digitar letras en precio'
    }
    if(isNaN(this.nueva.impuesto)){
      return 'Error, no se puede digitar letras en impuesto codigo'
    }
  
    return "";
    
  }

  Guardar(){

    let error = this.ValidarArticulo();
    if(error != ""){
      Swal.fire("¡Error!", error, "error")
    }else{
      
      this.lista.push(this.nueva);
      this.nueva = new Articulo();
  
      
    }

   
  }
}



