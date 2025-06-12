import { Routes } from '@angular/router';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { PostsTableComponent } from './components/posts-table/posts-table.component';
import { TodosTableComponent } from './components/todos-table/todos-table.component';

export const routes: Routes = [
  { path: 'users', component: UsersTableComponent },
  { path: 'users/:id', component: UsersTableComponent },
  { path: 'posts', component: PostsTableComponent },
  { path: 'posts/:userId', component: PostsTableComponent },
  { path: 'todos/:userId', component: TodosTableComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', redirectTo: 'users', pathMatch: 'full' },
];
