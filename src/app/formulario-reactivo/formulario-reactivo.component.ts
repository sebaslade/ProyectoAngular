import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent {
  //Atributos
  usuario = new FormControl('');
  correo = new FormControl('');

  //Metodo
  mostrarConsola(){
    console.log("Usuario: ", this.usuario.value);
    console.log("Correo: ", this.correo.value);
  }
}
