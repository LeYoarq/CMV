import { Injectable } from '@angular/core';

import { Persona } from './persona';


@Injectable(/*{
  providedIn: 'root'
}*/)
export class Comp1Service {

  constructor() { }

  getEdades() {
    const per1 = new Persona(23);
    const per2 = new Persona(3);
    const per3 = new Persona(99);
    const per4 = new Persona(101);
    document.write("<p>PARTE 1:</p><p> Edades del Grupo:  Persona 1 -> " + per1.getEdad() + " años / Persona 2 -> " + per2.getEdad() +
      " años / Persona 3 -> " + per3.getEdad() + " años / Persona 4 -> " + per4.getEdad() + " años </p>");
  }
}
