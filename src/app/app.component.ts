import { Component } from '@angular/core';
import { PostInterface } from './posts/interface/post-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts: PostInterface[] = [];
  title = 'todo-notes';

  onPostAdded(posts: PostInterface) {
    this.storedPosts.push(posts);
  }
}
