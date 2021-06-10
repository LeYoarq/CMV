import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title   = 'Model - ngModel';
  nombre  = '';
  nombre2 = '';
  cambiaNombre($v) {
    this.nombre=this.nombre.toLowerCase();
    this.nombre2=this.nombre.toUpperCase();
  }
  cambiaNombre2($v) {
    this.nombre2=this.nombre2.toUpperCase();
    this.nombre=this.nombre2.toLowerCase();
  }

}
