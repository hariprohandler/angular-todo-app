import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostInterface } from '../../interface/post-interface';
import { PostService } from '../../service/post-service.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: PostInterface[] = [];
  postsSub: Subscription;
  constructor(public postService: PostService) {
    this.postsSub = this.postService.getPostUpdateListener()
      .subscribe((posts: PostInterface[]) => {
        this.posts = posts;
      });
  }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

  ngOnDestroy(): void {
    if (this.postsSub)
      this.postsSub.unsubscribe();
  }

}
