import { Component } from '@angular/core';
import { CiudadService } from '../ciudad.service';

@Component({
  selector: 'app-listaciudad',
  templateUrl: './listaciudad.component.html',
  styleUrls: ['./listaciudad.component.css']
})
export class ListaciudadComponent {
  constructor(public ciudadService:CiudadService){

  }
}
