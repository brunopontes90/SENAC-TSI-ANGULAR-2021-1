import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { ExemploNgforComponent } from './views/exngfor/exemplo-ngfor/exemplo-ngfor.component';
import { Exercicio1Component } from './exercicio/exercicio1/exercicio1.component';
import { Exercicio2Component } from './exercicio/exercicio2/exercicio2.component';
import { ExemploNgSwitchComponent } from './views/exngSwitch/exemplo-ng-switch/exemplo-ng-switch.component';
import { Exec1Component } from './exercicioSwicth/exec1/exec1.component';
import { Exec2Component } from './exercicioSwicth/exec2/exec2.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploNgforComponent,
    Exercicio1Component,
    Exercicio2Component,
    ExemploNgSwitchComponent,
    Exec1Component,
    Exec2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
