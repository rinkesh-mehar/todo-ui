import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Todo} from '../list-todos/list-todos.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(private todoDataService: TodoDataService,
              private rout: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    // retrieve the id of todo using snapshot with component
    // use this using importing activated rout

    // this line use to remove the todo.discription error from console cause subscribe work asyncronusly by
    //  this todo set to null after ts is loader and in html give error
    this.id = this.rout.snapshot.params.id;
    this.todo = new Todo(this.id, '', false, new Date);

    if (this.id != -1) {
      this.todoDataService.retrieveTodo('rinkesh', this.id)
        .subscribe(
          data => this.todo = data
        );
    }
  }

  saveTodo() {
    // use == for primitive
    if (this.id == -1) {
      // Create todo
      this.todoDataService.createTodo('Rinkesh', this.todo)
        .subscribe(
          data => {
            console.log(`Created todo is -> ${data}`);
            this.router.navigate(['todos']);
          }
        );
    } else {
      // Update Todo
      this.todoDataService.updateTodo('Rinkesh', this.id, this.todo)
        .subscribe(
          data => {
            console.log(`Updated todo is ${data}`);
            this.router.navigate(['todos']);
          }
        );
    }
  }
}
