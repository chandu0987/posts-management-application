import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  savePost(post: Post) {
    return this.http.post<{ message: string }>(
      `${environment.host}/posts`,
      post
    );
  }

  getPosts() {
    return this.http.get<{ message: string; posts: Post[] }>(
      `${environment.host}/posts`
    );
  }

  deletePost(postId : string){
    return this.http.delete<{ message:string }>(
     `${environment.host}/posts/${postId}`
    );
  }

  getPost(id : string){
    return{...this.posts.find(p => p.id == id)};
  }
}


