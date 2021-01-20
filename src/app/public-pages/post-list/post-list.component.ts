import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts.service';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-public-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PublicPostListComponent implements OnInit {
  posts: Post[]=[];

  constructor(private postsService: PostsService){
    this.posts= this.postsService.getPosts();
  }

  ngOnInit(): void {
  }

}
