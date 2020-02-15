import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  readonly api_url = 'https://pg70462vjc.execute-api.eu-west-2.amazonaws.com/dev/';

  constructor(private http: HttpClient) { }

  public getPosts() {
    return this.http.get(this.api_url.concat('posts/'));
  }

  public createPost(body) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');


    this.http.post(this.api_url.concat('post/'), body)
      .subscribe(data => {
        // alert('Post successfully created.');
        window.location.reload();
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }

  public deletePost(id : string){
    this.http.delete(this.api_url.concat('post/').concat(id))
    .subscribe(data => {
      // alert('Post successfully deleted.');
      window.location.reload();
    }, error => {
      console.log(JSON.stringify(error.json()));
    });
  }


  public updatePost(body, id : string) {
    this.http.put(this.api_url.concat('post/').concat(id), body)
    .subscribe(data => {
      // alert('Post updated');
      window.location.reload();
    }, error => {
      console.log(JSON.stringify(error.json()));
    });
  }

  public getPost(id : string){
    return this.http.get(this.api_url.concat('post/').concat(id));
  }

}
