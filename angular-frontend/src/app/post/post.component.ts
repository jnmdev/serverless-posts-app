import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  // Delte post and check if it came from actual user
  apiCallDeletePost() {
    var userNameLoggedIn;
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(
      user => {
        console.log(user);
        userNameLoggedIn = user.username;

        if (userNameLoggedIn == this.post.userId) {
          this.apiService.deletePost(this.post.id);
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

  apiCallLikePost() {

    this.post.likes = this.post.likes + 1;
    this.apiService.updatePost(this.post, this.post.id)
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
