import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'matapp';
  screenWidth = window.innerWidth;


  @HostListener('window:resize', ['$event'])

  // tslint:disable-next-line: typedef
  onResize(){
    this.screenWidth = window.innerWidth;
  }
}
