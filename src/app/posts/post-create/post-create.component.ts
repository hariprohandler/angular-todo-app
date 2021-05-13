import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostInterface } from '../interface/post-interface';
import { PostService } from '../service/post-service.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredDescription = '';
  enteredTitle = '';

  constructor(public postService: PostService) { }

  ngOnInit(): void {
  }

  onAddPost(postForm: NgForm) {
    if(postForm.invalid){
      return;
    }
    this.postService.addPost(postForm.value.title, postForm.value.content);
  }

}
