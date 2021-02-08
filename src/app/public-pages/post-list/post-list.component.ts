import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/app/shared/services/posts.service';
import { Post } from 'src/app/shared/models/post.model';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { Router } from '@angular/router';
import { PUBLIC_ROUTE_PATHS } from 'src/app/shared/utils/constant';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-public-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PublicPostListComponent implements OnInit {
  posts: Post[] = [];
  totalPostsCount = 0;
  postsPerPage = 5;
  pageSizeOptions = [5, 10, 50, 100];
  currentPage =1;

  constructor(
    private postsService: PostsService,
    private snackbar: SnackbarService,
    private router : Router,
  ) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.postsService.getPosts(this.postsPerPage, this.currentPage).subscribe(
      (data) => {
        this.posts = data.posts;
        this.totalPostsCount =  data.totalPostsCount;
      },
      (error) => {
        this.snackbar.showSuccess(error.message);
      }
    );
  }

  onPublicPageChange(pageEvent : PageEvent){
    this.currentPage = pageEvent.pageIndex+1;
    this.postsPerPage = pageEvent.pageSize;
    this.fetchPosts();
  }
}
