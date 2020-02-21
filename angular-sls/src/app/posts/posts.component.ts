import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  // Delte post and check if it came from actual user
  apiCallDeletePost(id, userNameOfPost) {
    console.log(id);
    var userNameLoggedIn;

    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(
      user => {
        console.log(user);
        userNameLoggedIn = user.username;

        if (userNameLoggedIn == userNameOfPost) {
          this.apiService.deletePost(id);
        }
        else {
          alert('Only the original poster can delete this item.');
        }
      })
      .catch(err => {
        console.log(err);
        alert('Error: ' + err);
      });
  }

  apiCallLikePost(id) {
    // Get current data from api
    const post = this.apiService.getPost(id).subscribe((data) => {

      var response: any = data;
      // Increment number of likes
      var likes;
      if (typeof response.likes != 'undefined') {
        likes = response.likes;
        likes = likes + 1;
      }
      else {
        likes = 1;
      }

      response.likes = likes;
      this.apiService.updatePost(response, id)

    });
  }

  getDateFromString(dateString: String) {
    let regExp: RegExp = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
    var result = dateString.match(regExp);
    return result[0];
  }

  getTimeFromString(dateString: String) {
    let regExp: RegExp = /[(?!T)[0-9]{2}:[0-9]{2}/;
    var result = dateString.match(regExp);
    return result[0];
  }

}
