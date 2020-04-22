import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>{{madeBy}}</h1>',
  styleUrls: ['./app.component.css']
  // styles: ['{background-color:black}']
})
export class AppComponent {
  title = 'angular-project';
  madeBy = 'made by rinkesh';
}



