import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userName: any;

  // injecting dependency injection for activated route for user name
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
// ngOnInit is call instantly whenever login redirected to welcome with parameter this name parameter is sent by app-routing.module

    console.log(this.route.snapshot.params['name']);
    this.userName = this.route.snapshot.params['name'];
  }

}
