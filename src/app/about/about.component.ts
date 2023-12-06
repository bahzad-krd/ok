import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
 topicTitle: string = 'Mathematics';
topicDescription: string = 'Learn about numbers, addition, and subtraction.';
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
    }, 0);
  }
}
