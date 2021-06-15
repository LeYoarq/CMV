import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Pipes1Component } from './pipes1/pipes1.component';
import { FactorialPipe } from './factorial.pipe';
import { SumatorioPipe } from './sumatorio.pipe';
import { CuboPipe } from './cubo.pipe';
import { CuadradoPipe } from './cuadrado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Pipes1Component,
    FactorialPipe,
    SumatorioPipe,
    CuboPipe,
    CuadradoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
