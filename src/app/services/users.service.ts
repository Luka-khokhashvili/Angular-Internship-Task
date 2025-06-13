import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {}

  //? Fetch all users and transform the name
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

  //? Fetch a user by ID
  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/users/${id}`);
  }
}
