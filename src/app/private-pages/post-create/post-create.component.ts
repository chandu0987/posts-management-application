import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../../shared/models/post.model';
import { PostsService } from '../../shared/services/posts.service';
import { Router } from '@angular/router';
import { BUTTON_TEXTS } from 'src/app/shared/utils/constant';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent {
  createPostText = BUTTON_TEXTS.POST_CREATE;
  enteredTittle = '';
  enteredContent = '';

  constructor(
    private postsService: PostsService,
    private router: Router,
    private snackbar: SnackbarService
  ) {}

  onAddPost(form: NgForm) {
    const post: Post = {
      title: form.value.title,
      content: form.value.content,
    };
    this.postsService.savePost(post).subscribe(
      (data) => {
        this.enteredTittle = '';
        this.enteredContent = '';
        this.snackbar.showSuccess(data.message);
      },
      (error) => {
        this.snackbar.showSuccess(error);
      }
    );
  }
}
