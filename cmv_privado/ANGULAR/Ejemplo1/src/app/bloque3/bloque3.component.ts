import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloque3',
  templateUrl: './bloque3.component.html',
  styleUrls: ['./bloque3.component.css']
})
export class Bloque3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'app works!';
  ponFondo = true;
  mostrar = true;
  habilitar = false;
  referencia = "http://www.google.com";
}
