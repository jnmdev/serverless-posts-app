import { Component, OnInit } from '@angular/core';

import { Auth } from 'aws-amplify';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})

export class NewPostComponent implements OnInit {

  public title: any = '';
  public body: any = '';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  apiCallCreatePost(title, body) {

    var userName = 'nan';

    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(
      user => {
        console.log(user);
        userName = user.username;

        let reqBody = {
          title: title,
          body: body,
          likes: 0,
          userId: userName
        }
        console.log(reqBody);

        this.apiService.createPost(JSON.stringify(reqBody));
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });

    // let reqBody = {
    //   title: title,
    //   body: body,
    //   likes: 0,
    //   userId: userName
    // }
    // console.log(reqBody);

    // this.apiService.createPost(JSON.stringify(reqBody));
  }


}
