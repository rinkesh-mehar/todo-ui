import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../../app.constants';

export class HelloWorldBean {
  constructor(public name: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) {
  }

  executeHelloWorldBeanService() {
    return this.httpClient.get<HelloWorldBean>(`${API_URL}/welcome`);
    // console.log('Executed hello world bean service');
  }

  executeHelloWorldBeanWithParameter(message, name) {
    /**
     * this commented part is for single http header authorization
     * instead of this, Implemented Interceptor for all over the application
     */

    // /**
    //  * this is header part for sending authorization to over come CORS problem to spring security
    //  */
    // const basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    //
    // const headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // });

    // TODO use tick to pass variable instead of append
    return this.httpClient.get<HelloWorldBean>(`${API_URL}/get-bean/${message}-${name}`);
    // /**
    //  * passing this headers of credential
    //  */
    // {headers});
  }

  // /**
  //  * this method set the authorization Credential like insomnia
  //  */
  // createBasicAuthenticationHttpHeader() {
  //   const userName = 'rinkesh';
  //   const password = '123';
  //   return 'Basic ' + window.btoa(userName + ':' + password);
  // }
}
