import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userName: any;
  welcomeMessageFromService: string;
  name: string;
  message: string;

  // injecting dependency injection for activated route for user name
  constructor(private route: ActivatedRoute, private welcomeDataService: WelcomeDataService) {

  }

  ngOnInit(): void {
// ngOnInit is call instantly whenever login redirected to welcome with parameter this name parameter is sent by app-routing.module

    console.log(this.route.snapshot.params['name']);
    this.userName = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    console.log(this.welcomeDataService.executeHelloWorldBeanService());

    // TODO this is used to execute end point to subscribe the observable
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    // console.log('last line of welcome message');
    console.log('called welcome message method');
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.name;
    console.log('in console handle succ', response.name);
  }

  handleErrorResponse(error) {
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }

  getWelcomeMessageWithParameter() {
    this.welcomeDataService.executeHelloWorldBeanWithParameter('rinkesh', 'nagpur').subscribe(
      response => this.handleSuccessfulResponseOfParameter(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponseOfParameter(response) {
    this.name = response.name;
    this.message = response.message;
    console.log('in console handle name', response.name);
    console.log('in console handle message', response.message);
  }
}
