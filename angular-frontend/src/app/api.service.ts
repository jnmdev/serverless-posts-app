import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

import { Post } from './post.model'

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  readonly api_url = environment.apiBaseUrl;
  readonly apiKey = environment.apiKey;
  readonly headers = new HttpHeaders().set('x-api-key', this.apiKey);

  constructor(private http: HttpClient) { }

  public getPosts() {
    return this.http.get(this.api_url + 'posts/', { headers: this.headers });
  }

  public createPost(post: Post) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.api_url + 'post/', post, { headers: this.headers });
  }

  public deletePost(id: string) {
    this.http.delete(this.api_url + 'post/' + id, { headers: this.headers })
      .subscribe(data => {
        // alert('Post successfully deleted.');
        // window.location.reload();
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }

  public updatePost(body, id: string) {
    this.http.put(this.api_url + 'post/' + id, body, { headers: this.headers })
      .subscribe(data => {
        // alert('Post updated');
        // window.location.reload();
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }

  public getPost(id: string) {
    return this.http.get(this.api_url + 'post/' + id, { headers: this.headers });
  }

}
