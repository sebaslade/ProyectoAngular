import { Component } from '@angular/core';
import { Pais } from '../countrys';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
  //Directiva ngFor
  public arrPaises:Array<Pais>=[
    {nombre:"Estados Unidos",capital:"Washington D.C",presidente:"Joe Biden",continente:"Norte America",poblacion:331,idioma:"inglés"},
    {nombre:"Perú",capital:"Lima",presidente:"Dina Boluarte",continente:"America del Sur",poblacion:33,idioma:"español"},
    {nombre:"Alemania",capital:"Berlín",presidente:"Frank-Walter Steinmeier",continente:"Europa",poblacion:83,idioma:"alemán"},
    {nombre:"Inglaterra",capital:"Londres",presidente:"Boris Johnson",continente:"Europa",poblacion:56,idioma:"inglés"},
    {nombre:"China",capital:"Pekín",presidente:"Xi Jinping",continente:"Asia",poblacion:1411,idioma:"chino mandarín"},
    {nombre:"Australia",capital:"Canberra",presidente:"Anthony Albanese",continente:"Oceanía",poblacion:26,idioma:"inglés"},
    {nombre:"Japón",capital:"Tokio",presidente:"Fumio Kishida",continente:"Asia",poblacion:126,idioma:"japonés"},
    {nombre:"Canadá",capital:"Ottawa",presidente:"Justin Trudeau",continente:"Norte America",poblacion:38,idioma:"inglés y francés"}
  ];
}
