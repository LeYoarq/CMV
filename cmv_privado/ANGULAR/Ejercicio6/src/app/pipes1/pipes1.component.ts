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
  dia = new Date();
  h = this.dia.getHours();
  m = this.dia.getMinutes();
  hora = this.h + ":" + this.m;

  texto:string;
}
