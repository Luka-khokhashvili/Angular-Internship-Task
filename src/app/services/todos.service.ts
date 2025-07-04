import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User as Todos } from '../interfaces/user';
import { map, Observable } from 'rxjs';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {}

  //? Fetch all todos
  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${this.baseUrl}/todos`);
  }

  //? Fetch all todos by a specific user ID
  getTodosByUserId(userId: number): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${this.baseUrl}/users/${userId}/todos`);
  }
}
