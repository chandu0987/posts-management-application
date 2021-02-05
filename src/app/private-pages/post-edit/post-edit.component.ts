import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../../shared/models/post.model';
import { PostsService } from '../../shared/services/posts.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BUTTON_TEXTS, PRIVATE_ROUTE_PATHS } from 'src/app/shared/utils/constant';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss'],
})
export class PostEditComponent implements OnInit {
  updatePostText = BUTTON_TEXTS.UPDATE_POST;
  postId: string;
  post: Post;

  constructor(
    public route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router,
    private snackbar: SnackbarService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((data) => {
      this.postId = data.get('postId');
      if (this.postId) {
        this.getPost();
      }
    });
  }

  getPost() {
    this.postsService.getPost(this.postId).subscribe(
      (data) => {
        this.post = data.post;
        console.log(this.post);
      },
      (err) => {
        this.snackbar.showSuccess(err.message);
      }
    );
  }

  onUpdatePost(): void {
    this.postsService.updatePost(this.post).subscribe(
      (updatedData) => {
        this.snackbar.showSuccess(updatedData.message);
        this.router.navigate([PRIVATE_ROUTE_PATHS.PRIVATE_POST_LIST])
      },
      (err) => {
        this.snackbar.showSuccess(err.message);
      }
    )
  }
}
