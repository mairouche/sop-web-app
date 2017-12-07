import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import 'rxjs/add/operator/map';

import { Credentials }    from './model/credentials';
import { User }    from './model/user';
import { SigninService } from './service/signinService';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  credentials : Credentials;
  user: User;

  constructor(private signinService : SigninService) {
  }

  ngOnInit() {
  }

  onSubmit(credentials) {
    this.credentials = new Credentials(credentials.email, credentials.password, "");
    this.signinService.signin(this.credentials).subscribe(user => {
      this.user = user;
      localStorage.setItem("user", JSON.stringify(this.user));
      console.log(localStorage.getItem("user"));
    });
  }

}
