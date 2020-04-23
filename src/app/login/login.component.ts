import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: any;
  password: any;
  invalidLogin = false;
  errorMessage = 'Invalid email or password';

  constructor() {
  }

  ngOnInit(): void {
  }

  handleLogin() {
    // this.userName = userName;
    // this.password = password;
    if (this.userName === 'rinkesh' && this.password === '123') {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
    console.log(this.userName);
    console.log(this.password);
  }

}
