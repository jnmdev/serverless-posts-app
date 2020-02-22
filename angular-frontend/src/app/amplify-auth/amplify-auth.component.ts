import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-amplify-auth',
  templateUrl: './amplify-auth.component.html',
  styleUrls: ['./amplify-auth.component.css']
})
export class AmplifyAuthComponent implements OnInit {
  title = 'angular-sls';
  signedIn: boolean;
  user: any;
  greeting: string;

  signUpConfig = {
    header: 'My Customized Sign Up',
    hideAllDefaults: true,
    defaultCountryCode: '1',
    signUpFields: [
      {
        label: 'Username',
        key: 'username',
        required: true,
        displayOrder: 1,
        type: 'string'
      },
      {
        label: 'Email',
        key: 'email',
        required: true,
        displayOrder: 2,
        type: 'string',
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 3,
        type: 'password'
      },
    ]
  }

  constructor(private amplifyService: AmplifyService) {
    this.amplifyService.authStateChange$
      .subscribe(authState => {
        this.signedIn = authState.state === 'signedIn';
        if (!authState.user) {
          this.user = null;
        } else {
          this.user = authState.user;
          this.greeting = "Hello " + this.user.username + ". You are now logged in.";
        }
      });
  }

  ngOnInit() {
  }

}
