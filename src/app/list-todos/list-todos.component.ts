import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {id: 1, description: 'Learn dance'},
    {id: 2, description: 'coding in angular'},
    {id: 3, description: 'learning backed'},
    {id: 4, description: 'doing full stack work'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
