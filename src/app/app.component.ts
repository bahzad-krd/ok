import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'bahzad';
  num1: number = 0;
  num2: number = 0;
  resultSum: number = 0;
  resultMynas: number = 0;
  resultMulti: number = 0;
  resultDiv: number = 0;

  sum() {
    this.resultSum = this.num1 + this.num2;
  }

  mynas() {
    this.resultMynas = this.num1 - this.num2;
  }

  multi() {
    this.resultMulti = this.num1 * this.num2;
  }

  div() {
    if (this.num2 == 0) {
      alert("Error: Division by zero is not allowed.");
    } else {
      this.resultDiv = this.num1 / this.num2;
    }
  }

  username: string | any = "";
  password: string = "";

  check() {
    if (this.username === "bahzad" && this.password === "1234") {
      if (this.username.trim() === "") {
        alert("Username cannot be empty.");
      }
      else {
        let valid = true;
        const usernameRegex = /^[a-zA-Z\s]+$/; // Regular expression for letters and spaces

        if (!usernameRegex.test(this.username)) {
          valid = false;
        }

        if (this.username.length <= 6) {
          valid = false;
        }

        if (valid) {
          alert("Login successful");
        }
        else {
          alert("Username can only contain letters and spaces, and should be longer than 6 characters.");
        }
      }
    }
    else {
      alert("Incorrect username or password.");
    }
  }
}