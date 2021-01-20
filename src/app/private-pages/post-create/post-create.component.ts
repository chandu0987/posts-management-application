import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../../shared/models/post.model';
import { PostsService } from '../../posts.service';
import { Router } from '@angular/router';
import { BUTTON_TEXTS } from 'src/app/shared/utils/constant';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent {
  enteredTittle = '';
  enteredContent = '';

  constructor(private postsService: PostsService, private router:Router) {}

  onAddPost(form: NgForm) {
    const post: Post = {  
      title: form.value.title,
      content: form.value.content,
    };
    this.postsService.savePost(post);
    this.enteredTittle = '';
    this.enteredContent = '';
   // this.router.navigateByUrl('privatehome')
  }
  createPostText= BUTTON_TEXTS.POST_CREATE;

}
