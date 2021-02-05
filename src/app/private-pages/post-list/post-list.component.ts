import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../../shared/services/posts.service';
import{ Post} from '../../shared/models/post.model';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PrivatePostListComponent {
 posts: Post[]=[];

 constructor(private postsService: PostsService){
  // this.posts= this.postsService.getPosts();
 }

}
