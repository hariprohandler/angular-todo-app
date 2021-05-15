import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/utility/api.service';
import { Constant } from 'src/app/utility/constant';
import { PostInterface } from '../interface/post-interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: PostInterface[] = [];
  private postsUpdated = new Subject<PostInterface[]>();
  constructor(private apiService: ApiService) { }

  getPosts(): PostInterface[]{
    this.apiService.get(Constant.getPostAPI).subscribe((res)=>{
      if(res.status)
        this.posts = res.posts;
        this.postsUpdated.next(this.returnPosts());
    });
    return [...this.posts];
  }

  returnPosts(): PostInterface[] {
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
    this.apiService.post(Constant.savePostAPI,post).subscribe((res)=> {
      console.log(res);
    });
    this.postsUpdated.next(this.returnPosts());
  }
}
