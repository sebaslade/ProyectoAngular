import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { CiudadComponent } from './ciudad/ciudad.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path: 'country',
    component:CountryComponent
  },
  {
    path: 'formulario-reactivo',
    component:FormularioReactivoComponent
  },
  {
    path: 'ciudad',
    component:CiudadComponent
  },
  {
    path:'home',
    redirectTo:'',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
