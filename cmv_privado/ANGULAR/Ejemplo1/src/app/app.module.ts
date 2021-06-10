import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { MenuComponent } from './menu/menu.component';
import { Bloque1Component } from './bloque1/bloque1.component';
import { Bloque2Component } from './bloque2/bloque2.component';
import { Bloque3Component } from './bloque3/bloque3.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    MenuComponent,
    Bloque1Component,
    Bloque2Component,
    Bloque3Component,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
