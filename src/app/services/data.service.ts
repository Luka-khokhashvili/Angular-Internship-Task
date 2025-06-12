import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrl}/users`).pipe(
      map((users) =>
        users.map((user) => {
          const [firstName, ...rest] = user.name.split(' ');
          const lastName = rest.join(' ');
          return {
            ...user,
            firstName,
            lastName,
          };
        })
      )
    );
  }

  getUserById(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/users/${id}`);
  }
}
