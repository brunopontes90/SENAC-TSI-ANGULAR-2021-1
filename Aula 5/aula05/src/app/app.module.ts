import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './views/formulario/formulario.component';

import {FormsModule} from '@angular/forms';
import { Exercicio1Component } from './exercicio/exercicio1/exercicio1.component';
import { Exercicio2Component } from './exercicio/exercicio2/exercicio2.component';
import { Exercicio3Component } from './exercicio/exercicio3/exercicio3.component';
import { Exercicio4Component } from './exercicio/exercicio4/exercicio4.component';
import { DiretivaComponent } from './views/diretiva/diretiva.component';
import { Ecercicio1Component } from './execDiretiva/ecercicio1/ecercicio1.component';
import { Ecercicio2Component } from './execDiretiva/ecercicio2/ecercicio2.component';
import { Ecercicio3Component } from './execDiretiva/ecercicio3/ecercicio3.component';
import { Ecercicio4Component } from './execDiretiva/ecercicio4/ecercicio4.component';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    Exercicio1Component,
    Exercicio2Component,
    Exercicio3Component,
    Exercicio4Component,
    DiretivaComponent,
    Ecercicio1Component,
    Ecercicio2Component,
    Ecercicio3Component,
    Ecercicio4Component,
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
