import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

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

  apiCallDeletePost(id) {
    console.log(id);
    this.apiService.deletePost(id);
  }

  apiCallLikePost(id) {
    // Get current data from api
    const post = this.apiService.getPost(id).subscribe((data) => {

      var response : any = data;
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

}
