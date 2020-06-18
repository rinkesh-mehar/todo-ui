import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';
import {AuthenticationService} from '../service/authentication.service';

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
  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  /**
   * This method is no longer use cause this used to authenticate hardcoded user
   */
  handleLogin() {
    // if (this.userName === 'rinkesh' && this.password === '123') {
    /**
     * This method returns observable back
     */

    if (this.hardcodedAuthenticationService.authenticate(this.userName, this.password)) {
      this.invalidLogin = false;
      // navigate to welcome page after login and passing username as parameter to show in welcome page
      this.router.navigate(['welcome', this.userName]);
    } else {
      this.invalidLogin = true;
    }
    console.log(this.userName);
    console.log(this.password);
  }

  handleJWTAuthLogin() {
    /**
     * we want to subscribe we dont want anything from return
     */
    this.authenticationService.executeJWTAuthenticationService(this.userName, this.password)
      .subscribe(
        data => {
          /**
           * If response is OK
           */
          console.log(`data is -> ${data} , userName is ${this.userName} , password is ${this.password}`);
          this.invalidLogin = false;
          this.router.navigate(['welcome', this.userName]);
        },
        /**
         * If response is error
         */
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }


  /**
   * This method is used to authenticate user from BACKEND
   */
  authenticateUser() {
    /**
     * we want to subscribe we dont want anything from return
     */
    this.authenticationService.executeAuthenticationService(this.userName, this.password)
      .subscribe(
        data => {
          /**
           * If response is OK
           */
          console.log(`data is -> ${data} , userName is ${this.userName} , password is ${this.password}`);
          this.invalidLogin = false;
          this.router.navigate(['welcome', this.userName]);
        },
        /**
         * If response is error
         */
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }
}
