import { Component } from '@angular/core';

//import {Escritor} from './escritor';
//import {Libro} from './libro';
import { Persona } from './personas';
import { Pais } from './pais';
import { Continente } from './continente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LOS PIPEs'
  
  persona1: Persona = new Persona('Diana', 'Leal', 25, '454545M');
  persona2: Persona = new Persona('Pepe', 'Rodriguez', 56, '454545A');
  persona3: Persona = new Persona('Carlos', 'Rios', 37, '454545P');
  persona4: Persona = new Persona('Nacho', 'Santos', 43, '454545E');
  personasArray: Persona[] = [this.persona1, this.persona2, this.persona3, this.persona4];

  pais1 = new Pais ('Madrid', 'Pozuelo', this.personasArray);
  pais2 = new Pais ('Andalucia', 'Malaga', this.personasArray);
  pais3 = new Pais ('Aragon', 'Zaragoza', this.personasArray);
  pais4 = new Pais ('Navarra', 'Navarra', this.personasArray);
  paisArray: Pais[] = [this.pais1, this.pais2, this.pais3, this.pais4];

  continente = new Continente ('Europa', this.paisArray);
}




















/*
  libro1: Libro = new Libro('Mucho ruido y pocas nueces', 'Comedia');
  libro2: Libro = new Libro('Romeo y Julieta', 'Drama');
  librosArray: Libro[] = [this.libro1, this.libro2];

  escritor = new Escritor (1, 'William Shakespeare', new Date(1564, 3, 26), this.librosArray);*/