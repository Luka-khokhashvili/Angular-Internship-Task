import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User as Todos } from '../interfaces/user';
import { map, Observable } from 'rxjs';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${this.baseUrl}/todos`);
  }

  gettodosByUserId(userId: string): Observable<Todo> {
    return this.httpClient.get<Todo>(`${this.baseUrl}/users/${userId}`);
  }
}
