import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: any;
  password = '123';

  constructor() {
  }

  ngOnInit(): void {
  }

  handleLogin() {
    // this.userName = userName;
    // this.password = password;
    console.log(this.userName);
  }

}
