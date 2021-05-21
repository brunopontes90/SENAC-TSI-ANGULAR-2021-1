import { AboutComponent } from './views/about/about.component';
import { UsuerComponent } from './views/usuer/usuer.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'usuer', component : UsuerComponent},
  {path: 'about', component : AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
