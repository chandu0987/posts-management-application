import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../../shared/models/post.model';
import { PostsService } from '../../shared/services/posts.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BUTTON_TEXTS } from 'src/app/shared/utils/constant';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit{
  createPostText = BUTTON_TEXTS.POST_CREATE;
  enteredTittle = '';
  enteredContent = '';
  private mode = 'create';
  private postId : string;
  private post: Post;

  constructor(
    public route : ActivatedRoute,
    private postsService: PostsService,
    private router: Router,
    private snackbar: SnackbarService,

  ) {}

  ngOnInit(){
    this.route.paramMap.subscribe((paraMap: ParamMap)=>{
           if(paraMap.has('postId')){
            this.mode=  'edit';
            this.postId=paraMap.get('postId');
            this.post= this.postsService.getPost(this.postId);
           }
           else{
             this.mode = "create";
             this.postId = null;
           }
    });
  }

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
