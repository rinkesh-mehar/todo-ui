import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
    return this.httpClient.get<HelloWorldBean>('http://localhost:8085/welcome');
    // console.log('Executed hello world bean service');
  }

  executeHelloWorldBeanWithParameter(message, name) {
    // TODO use tick to pass variable instead of append
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8085//get-bean/${message}-${name}`);
  }
}
