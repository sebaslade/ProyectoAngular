import { Component } from '@angular/core';
import { CiudadService } from '../ciudad.service';

@Component({
  selector: 'app-agregarciudad',
  templateUrl: './agregarciudad.component.html',
  styleUrls: ['./agregarciudad.component.css']
})
export class AgregarciudadComponent {
  constructor(public ciudadService:CiudadService){

  }

  //Atributo
  ciudad:string='';

  //Método
  agregarCiudad(){
    this.ciudadService.agregarCiudadServicio(this.ciudad);
  }
}
