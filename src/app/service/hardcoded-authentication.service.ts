import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// TODO to make this class use terminal command - ng generate service service/hardcodedAuthentication
export class HardcodedAuthenticationService {

  constructor() {
  }

  authenticate(userName, password) {
    // console.log('before ' + this.isUserLoggedIn());
    if (userName === 'rinkesh' && password === '123') {
      sessionStorage.setItem('authenticaterUser', userName);
      // console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    // const user = sessionStorage.getItem('authenticaterUser')
    const user = sessionStorage.getItem('authenticaterUser');

    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser');
  }

}
