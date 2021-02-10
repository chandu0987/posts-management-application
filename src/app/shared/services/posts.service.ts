import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  savePost(post: Post) {
    return this.http.post<{ message: string }>(
      `${environment.host}/posts/create-post`,
      post
    );
  }

  getPosts(postsPerPage: number, currentPage: number) {
    const queryparams = `?pageSize=${postsPerPage}&currentPage=${currentPage}`;
    return this.http.get<{ message: string; posts: Post[]; totalPostsCount: number }>(
      `${environment.host}/posts${queryparams}`
    );
  }

  deletePost(postId: string) {
    return this.http.delete<{ message: string }>(
      `${environment.host}/posts/${postId}`
    );
  }

  getPost(postId: string) {
    return this.http.get<{ message: string; post?: Post }>(
      `${environment.host}/post/${postId}`
    );
  }

  updatePost(post: Post) {
    return this.http.put<{ message: string }>(`${environment.host}/post/update-post`, post);
  }
}
