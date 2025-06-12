import { Component } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts-table',
  imports: [CommonModule],
  templateUrl: './posts-table.component.html',
  styleUrl: './posts-table.component.scss',
})
export class PostsTableComponent {
  posts: Post[] = [];

  constructor(private PostsService: PostsService) {}

  ngOnInit() {
    this.PostsService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
