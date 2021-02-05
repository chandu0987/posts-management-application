import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/app/shared/services/posts.service';
import { Post } from 'src/app/shared/models/post.model';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { Router } from '@angular/router';
import { PUBLIC_ROUTE_PATHS } from 'src/app/shared/utils/constant';

@Component({
  selector: 'app-public-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PublicPostListComponent implements OnInit {
  posts: Post[] = [];
  constructor(
    private postsService: PostsService,
    private snackbar: SnackbarService,
    private router : Router,
  ) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.postsService.getPosts().subscribe(
      (data) => {
        this.posts = data.posts;
      },
      (error) => {
        this.snackbar.showSuccess(error.message);
      }
    );
  }
}
