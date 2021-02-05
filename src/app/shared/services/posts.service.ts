import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root',
})
export class PostsService {


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

  getPost(postId : string ){
    return this.http.get<{message: string, post ?: Post }>(
      `${environment.host}/post/${postId}`
    );
  }

  updatePost(post: Post){
     return this.http.put<{message: string}>(
        `${environment.host}/post`, post)
  }
}


