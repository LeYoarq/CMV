import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe2',
  templateUrl: './pipe2.component.html',
  styleUrls: ['./pipe2.component.css']
})
export class Pipe2Component implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  fecha: Date = new Date(1988, 3, 15, 12, 30, 15); //15 de Abril del 1988 12:30:15

}
