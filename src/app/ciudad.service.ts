import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor() { }

  arrCiudades:string[]=['Washington D.C','Lima','Berlín','Londres','Pekín','Canberra','Tokio','Ottawa','Hong Kong'];
  //Método
  agregarCiudadServicio(ciudad:string){
    this.arrCiudades.push(ciudad);
  }
}
