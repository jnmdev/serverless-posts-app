import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../post.model'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public posts: Post[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }

  onRemovePost(post: Post) {
    this.apiService.deletePost(post.id);
    this.posts = this.posts.filter((t) => t.id !== post.id);
  }

  onAddPost(post: Post) {
    this.apiService.createPost(post).subscribe((data: Post) => {
      var newPost: Post = data;
      this.posts.unshift(newPost);
    }, error => {
      console.log(JSON.stringify(error.json()));
    })
  }

}
