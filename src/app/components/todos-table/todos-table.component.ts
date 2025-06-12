import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos-table',
  imports: [CommonModule],
  templateUrl: './todos-table.component.html',
  styleUrl: './todos-table.component.scss',
})
export class TodosTableComponent {
  todos: Todo[] = [];
  userId!: number;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private TodosService: TodosService
  ) {}

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get('userId'));

    if (this.userId) {
      this.isLoading = true;
      this.TodosService.getTodosByUserId(this.userId).subscribe({
        next: (data) => {
          this.todos = data;
        },
        error: (error) => {
          console.error('Error fetchin user data', error);
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }
  }
}
