import { Injectable } from '@angular/core';
import { Post } from './shared/models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: Post[] = [];

  constructor() {}

  savePost(post: Post){
    this.posts.push(post);
  }

  getPosts(){
    return [...this.posts];
  }
}
