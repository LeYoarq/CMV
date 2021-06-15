import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes1',
  templateUrl: './pipes1.component.html',
  styleUrls: ['./pipes1.component.css']
})
export class Pipes1Component implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  fecha1 = new Date(1988,3,15); 
  idFormatoFecha = true; 
  get formatoFecha() { return this.idFormatoFecha ? 'shortDate' : 'fullDate'; }
  cambiarFormatoFecha() { this.idFormatoFecha = !this.idFormatoFecha; }


}
