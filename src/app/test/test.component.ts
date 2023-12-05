import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
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
