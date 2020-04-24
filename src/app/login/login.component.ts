import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

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

  // Dependency injection for router
  constructor(private route: Router) {
  }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.userName === 'rinkesh' && this.password === '123') {
      this.invalidLogin = false;
      // navigate to welcome page after login and passing username as parameter to show in welcome page
      this.route.navigate(['welcome', this.userName]);
    } else {
      this.invalidLogin = true;
    }
    console.log(this.userName);
    console.log(this.password);
  }

}
