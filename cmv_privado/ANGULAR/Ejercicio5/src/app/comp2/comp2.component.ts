import { Component, OnInit } from '@angular/core';
import { Comp2Service } from '../comp2.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private cp2serv: Comp2Service) { }

  ngOnInit(): void {
    this.cp2serv.getImportes();
  }

}
