/**
 * Created by Meidi on 28/10/2017.
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Credentials }    from '../model/credentials';
import { User }    from '../model/user';

import 'rxjs/add/operator/map';

@Injectable()
export class SigninService {
  body:string;

  constructor(private http: Http) {
  }

  signin(credentials:Credentials) {
    return this.http.post('http://localhost:8081/sop-auth-api/auth/user/signin', credentials).map((res: Response) => res.json());
  }
}
