import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model'

import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})

export class NewPostComponent implements OnInit {

  newPost: Post = new Post();

  @Output()
  add: EventEmitter<Post> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  apiCallCreatePost(title: string, body: string) {

    var userName = 'nan';

    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(
      user => {
        userName = user.username;

        this.newPost.title = title;
        this.newPost.body = body;
        this.newPost.likes = 0;
        this.newPost.userId = userName;

        this.add.emit(this.newPost);
        this.newPost = new Post();

      })
      .catch(err => {
        console.log(err);
        alert('Error: ' + err);
      });
  }


}
