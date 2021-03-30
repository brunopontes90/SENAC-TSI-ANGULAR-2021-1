import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingsComponent } from './views/bindings/bindings.component';
import { Exercicio1Component } from './exercicio/exercicio1/exercicio1.component';
import { Exercicio2Component } from './exercicio/exercicio2/exercicio2.component';
import { Exercicio3Component } from './exercicio/exercicio3/exercicio3.component';
import { Exercicio4Component } from './exercicio/exercicio4/exercicio4.component';
import { Exercicio5Component } from './exercicio/exercicio5/exercicio5.component';
import { Exercicio6Component } from './exercicio/exercicio6/exercicio6.component';
import { Exercicio7Component } from './exercicio/exercicio7/exercicio7.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    Exercicio1Component,
    Exercicio2Component,
    Exercicio3Component,
    Exercicio4Component,
    Exercicio5Component,
    Exercicio6Component,
    Exercicio7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
