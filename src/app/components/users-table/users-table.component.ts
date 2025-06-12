import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-table',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.scss',
})
export class UsersTableComponent {
  users: User[] = [];
  searchTerm: string = '';
  filteredUsers: User[] = [];
  isLoading: boolean = false;

  constructor(private UsersService: UsersService) {}

  ngOnInit() {
    this.isLoading = true;
    this.UsersService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.filteredUsers = users;
      },
      error: (error) => {
        console.error('Error fetchin user data', error);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  filterUsers() {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(term) ||
        user.lastName.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
    );
  }
}
