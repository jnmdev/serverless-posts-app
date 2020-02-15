import { Component, OnInit } from '@angular/core';
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
    let reqBody = {
      title: title,
      body: body,
      likes: 0
    }
    console.log(reqBody);

    this.apiService.createPost(JSON.stringify(reqBody));
  }


}
