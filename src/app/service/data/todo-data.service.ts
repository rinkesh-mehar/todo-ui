import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) {
  }

  retrieveAllTodo(userName) {
    return this.httpClient.get<Todo[]>(`http://localhost:8085/users/${userName}/todos`);
  }

  retrieveTodo(userName, id) {
    return this.httpClient.get<any>(`http://localhost:8085/users/${userName}/todo/${id}`);
  }

  deleteTodo(userName, id) {
    return this.httpClient.delete(`http://localhost:8085/users/${userName}/todo/${id}`);
  }
}
