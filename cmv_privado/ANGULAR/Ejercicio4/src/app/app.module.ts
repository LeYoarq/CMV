import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// 1- IMPORTO ESTA librería: 
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormularioComponent } from './formulario/formulario.component';
import { Pagina3Component } from './pagina3/pagina3.component';
import { Pagina4Component } from './pagina4/pagina4.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FormularioComponent,
    Pagina3Component,
    Pagina4Component
  ],
  imports: [
    BrowserModule,
    //FormsModule, -> AQUí TAMBIÉN !!!!!!
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
