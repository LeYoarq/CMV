import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// PARA PODER realizar las Rutas:
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina3Component } from './pagina3/pagina3.component';
import { Pagina4Component } from './pagina4/pagina4.component';
import { InicioComponent } from './inicio/inicio.component';

// Configuración de las rutas:
// Es IMPORTANTE el orden en que se ponen las rutas. SE TIENE que poner LAS MÁS ESPECÍFICAS primero y luego las MÁS GENERALES
 // por que se ejecutan de arriba abajo
 const appRoutes: Routes = [
  { path: 'pagina1', component: Pagina1Component },  // Sintaxis: { path: 'Nombre_Ruta', component: Nombre_Componente }
  { path: 'pagina2', component: Pagina2Component },
  { path: 'pagina3', component: Pagina3Component },
  { path: 'pagina4', component: Pagina4Component },
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },  // Con REDIRECT para página de Inicio de la Aplicación

];

@NgModule({
  declarations: [
    AppComponent,
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    Pagina4Component,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    // AQUÍ TAMBIÉN
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
