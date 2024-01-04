import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { AgregarciudadComponent } from './agregarciudad/agregarciudad.component';
import { ListaciudadComponent } from './listaciudad/listaciudad.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryComponent,
    FormularioReactivoComponent,
    AgregarciudadComponent,
    ListaciudadComponent,
    CiudadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
