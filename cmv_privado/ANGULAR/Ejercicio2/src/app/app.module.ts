import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirIfComponent } from './dir-if/dir-if.component';
import { ForComponent } from './for/for.component';
import { ModelComponent } from './model/model.component';
import { StyleComponent } from './style/style.component';
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    DirIfComponent,
    ForComponent,
    ModelComponent,
    StyleComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
