import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-table',
  imports: [CommonModule],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.scss',
})
export class UsersTableComponent {
  users: User[] = [];

  constructor(private UsersService: UsersService) {}

  ngOnInit() {
    this.UsersService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
