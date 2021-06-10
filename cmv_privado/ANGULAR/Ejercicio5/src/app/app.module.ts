import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

//cargando servicios
import { Comp1Service } from './comp1.service';
import { Comp2Service } from './comp2.service';
//cargando componentes
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [Comp1Service, Comp2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
