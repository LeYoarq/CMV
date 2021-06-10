import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  title   = 'Style - ngStyle';
  color = 'blue';
  hayLetraGrande:boolean  = false;
  hayColorFondo:boolean  = false;
  hayLetraColor:boolean  = false;
  hayLetraItalica:boolean  = false;
  defineEstilos(){
      let styles= {
          'font-size': this.hayLetraGrande ? '300%' : 'initial',
          'background-color': this.hayColorFondo ? '#FFDF64' : '#DAF7A6',
          'color': this.hayLetraColor ? 'red' : 'black',
          'font-style': this.hayLetraItalica ? 'italic' : 'normal'
      };
      return styles;
  }

  option:string = "";
  cambEstilos() {
    if(this.option == "1") {
      var styles = { "color": "#EB0D5E" }
      return styles;
    }
    if(this.option == "2") {
      var styles = { "color": "#FFDF64" }
      return styles;
    }
    
  }
}
