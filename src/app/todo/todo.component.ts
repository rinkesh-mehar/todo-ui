import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Todo} from '../list-todos/list-todos.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(private todoDataService: TodoDataService, private rout: ActivatedRoute) {
  }

  ngOnInit(): void {
    // retrieve the id of todo using snapshot with component
    // use this using importing activated rout

    // this line use to remove the todo.discription error from console cause subscribe work asyncronusly by
    //  this todo set to null after ts is loader and in html give error
    this.todo = new Todo(1, '', false, new Date);
    this.id = this.rout.snapshot.params.id;
    this.todoDataService.retrieveTodo('rinkesh', this.id)
      .subscribe(
        data => this.todo = data
      );
  }

  saveTodo() {

  }
}
