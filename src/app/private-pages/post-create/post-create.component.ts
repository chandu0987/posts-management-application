import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../../shared/models/post.model';
import { PostsService } from '../../shared/services/posts.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BUTTON_TEXTS, PRIVATE_ROUTE_PATHS } from 'src/app/shared/utils/constant';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit{
  createPostText = BUTTON_TEXTS.POST_CREATE;

  constructor(
    public route : ActivatedRoute,
    private postsService: PostsService,
    private router: Router,
    private snackbar: SnackbarService,

  ) {}

ngOnInit(){}

  onAddPost(form: NgForm) {
    const post: Post = {
      title: form.value.title,
      content: form.value.content,
    };
    this.postsService.savePost(post).subscribe(
      (data) => {
        this.snackbar.showSuccess(data.message);
        this.router.navigate([PRIVATE_ROUTE_PATHS.PRIVATE_POST_LIST])
      },
      (error) => {
        this.snackbar.showSuccess(error);
      }
    );
  }

}
