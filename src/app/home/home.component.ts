import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  a: boolean = true;
  ngOnInit() {

    setTimeout(() => {
      const splashScreen = document.querySelector('.splash-screen');
      splashScreen?.remove();
    }, 3500);
    setTimeout(() => {
      this.a = false;
      const splashScreen = document.querySelector('.splash-screen2');
      splashScreen?.remove();
    }, 3500);
  }
}
