import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { map, Observable } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.baseUrl}/posts`);
  }

  getPostsByUserId(id: string): Observable<Post> {
    return this.httpClient.get<Post>(`${this.baseUrl}/posts/${id}`);
  }
}
