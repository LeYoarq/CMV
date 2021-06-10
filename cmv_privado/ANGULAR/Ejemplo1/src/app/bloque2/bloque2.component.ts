import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloque2',
  templateUrl: './bloque2.component.html',
  styleUrls: ['./bloque2.component.css']
})
export class Bloque2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  saludo: string = "Bloque dos, operativo. Prueba de ajuste xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  texto: string;
  click() { this.texto = "Bloque 2, tiene cosillas que mostrar";  }
}
