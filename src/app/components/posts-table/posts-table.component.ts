import { Component, HostListener } from '@angular/core';
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
  selectedPost: Post | null = null;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private PostsService: PostsService
  ) {}

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get('userId'));

    if (this.userId) {
      this.isLoading = true;
      this.PostsService.getPostsByUserId(this.userId).subscribe({
        next: (data) => {
          this.posts = data;
        },
        error: (error) => {
          console.error('Error fetchin user data', error);
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    } else {
      this.PostsService.getPosts().subscribe((data) => {
        this.posts = data;
      });
    }
  }

  openPopup(post: Post): void {
    this.selectedPost = post;
  }

  closePopup(): void {
    this.selectedPost = null;
  }

  // Close popup box when 'Esc' key is clicked
  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(event: KeyboardEvent) {
    this.closePopup();
  }
}
