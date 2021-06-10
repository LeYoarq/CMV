import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloque1',
  templateUrl: './bloque1.component.html',
  styleUrls: ['./bloque1.component.css']
})
export class Bloque1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  saludo: string = "Este mensaje se carga desde el archivo html del componente";
  texto: string;
  saludar() { this.texto = "Esto me tiene que saludar desde el bloque 1";  }

}
