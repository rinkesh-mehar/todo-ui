import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';


export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticaterUser';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private httpClient: HttpClient) {
  }

  executeAuthenticationService(userName, password) {
    /**
     * this commented part is for single http header authorization
     * instead of this, Implemented Interceptor for all over the application
     */

    /**
     * this is header part for sending authorization to over come CORS problem to spring security
     */
    const basicAuthHeaderString = 'Basic ' + window.btoa(userName + ':' + password);


    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.httpClient.get<AuthenticationBean>(`http://localhost:8085/authenticate`,
      /**
       * passing this headers of credential
       */
      {headers})
      /**
       * Pipe - What should be done if request success or request fails
       */
      .pipe(
        map(
          data => {
            // sessionStorage.setItem('authenticateUser', userName);
            /**
             * must export authenticate user and token in session (MANDATORY)
             */
            sessionStorage.setItem(AUTHENTICATED_USER, userName);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);

            return data;
          }
        )
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean {
  constructor(private message: string) {
  }
}
