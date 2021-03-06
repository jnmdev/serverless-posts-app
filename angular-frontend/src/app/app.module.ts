import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostsComponent } from './posts/posts.component';
import { AmplifyAuthComponent } from './amplify-auth/amplify-auth.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    PostsComponent,
    AmplifyAuthComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AmplifyAngularModule
  ],
  providers: [
    AmplifyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
