import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PostInterface } from '../interface/post-interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: PostInterface[] = [];
  private postsUpdated = new Subject<PostInterface[]>();
  constructor() { }

  getPosts(): PostInterface[]{
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string){
    const post: PostInterface = {
      title: title,
      description: content
    }
    this.posts.push(post);
    this.postsUpdated.next(this.getPosts());
  }
}
