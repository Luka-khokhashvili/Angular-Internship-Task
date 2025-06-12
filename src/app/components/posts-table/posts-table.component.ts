import { Component } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-table',
  imports: [CommonModule],
  templateUrl: './posts-table.component.html',
  styleUrl: './posts-table.component.scss',
})
export class PostsTableComponent {
  posts: Post[] = [];
  userId!: number;

  constructor(
    private route: ActivatedRoute,
    private PostsService: PostsService
  ) {}

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get('userId'));

    if (this.userId) {
      this.PostsService.getPostsByUserId(this.userId).subscribe((data) => {
        this.posts = data;
      });
    } else {
      this.PostsService.getPosts().subscribe((data) => {
        this.posts = data;
      });
    }
  }
}
