import { Component, OnInit } from '@angular/core';
import { Comp1Service } from '../comp1.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private cp1serv: Comp1Service) { }

  ngOnInit(): void {
    this.cp1serv.getEdades();
  }

}
