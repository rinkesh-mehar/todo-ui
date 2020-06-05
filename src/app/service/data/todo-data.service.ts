import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';
import {API_URL} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) {
  }

  retrieveAllTodo(userName) {
    return this.httpClient.get<Todo[]>(`${API_URL}/users/${userName}/todos`);
  }

  retrieveTodo(userName, id) {
    return this.httpClient.get<any>(`${API_URL}/users/${userName}/todo/${id}`);
  }

  deleteTodo(userName, id) {
    return this.httpClient.delete(`${API_URL}/users/${userName}/todo/${id}`);
  }

  updateTodo(userName, id, todo) {
    return this.httpClient.put(`${API_URL}/users/${userName}/todo/${id}`, todo);
  }

  createTodo(userName, todo) {
    return this.httpClient.post(`${API_URL}/users/${userName}/todo`, todo);
  }
}
