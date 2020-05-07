import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [];
  // new Todo(1, 'Learn dance', false, new Date()),
  // new Todo(1, 'coding in angular', true, new Date()),
  // new Todo(1, 'learning backed', true, new Date()),
  // new Todo(1, 'doing full stack work', false, new Date()),
  // {id: 2, description: 'coding in angular'},
  // ];

  constructor(private todoDataService: TodoDataService) {
  }

  ngOnInit(): void {
    this.todoDataService.retrieveAllTodo('rinkesh').subscribe(
      response => {
        this.todos = response;
      }
    );
  }

}

export class Todo {
  constructor(public id: number,
              public description: string,
              public done: boolean,
              public targetDate: Date
  ) {
  }
}
