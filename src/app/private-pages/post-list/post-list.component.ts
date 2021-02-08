import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/app/shared/services/posts.service';
import { Post } from 'src/app/shared/models/post.model';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { Router } from '@angular/router';
import { PRIVATE_ROUTE_PATHS, PUBLIC_ROUTE_PATHS } from 'src/app/shared/utils/constant';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-public-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PrivatePostListComponent implements OnInit {
  posts: Post[] = [];
  totalPosts = 10;
  postsPerPage = 2;
  pageSizeOptions = [1, 2, 5, 10];

  constructor(
    private postsService: PostsService,
    private snackbar: SnackbarService,
    private router : Router,
  ) {}

  ngOnInit(): void {
    // this.fetchPosts();
  }

  // fetchPosts(): void {
  //   this.postsService.getPosts().subscribe(
  //     (data) => {
  //       this.posts = data.posts;
  //     },
  //     (error) => {
  //       this.snackbar.showSuccess(error.message);
  //     }
  //   );
  // }

  onDeletePost(postId: string) {
    this.postsService.deletePost(postId).subscribe(
      (data) => {
        // this.fetchPosts();
        this.snackbar.showSuccess(data.message);
      },
      (error) => {
        this.snackbar.showSuccess(error.message);
      }
    );
  }

  onEditPost(id: string) {
    this.router.navigate([`${PRIVATE_ROUTE_PATHS.POST_EDIT}/${id}`])
  }

  onPageChange(PrivatePostpageData: PageEvent){
    console.log(PrivatePostpageData);
  }
}
