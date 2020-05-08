import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  message: string;
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
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoDataService.retrieveAllTodo('rinkesh').subscribe(
      response => {
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    console.log(`todo id is ${id}`);
    this.todoDataService.deleteTodo('rinkesh', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of todo ${id} successful`;
        this.refreshTodos();
        // this.ngOnInit();
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
