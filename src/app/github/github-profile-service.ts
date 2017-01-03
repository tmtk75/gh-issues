import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { GithubProfile } from './github-profile';

@Injectable()
export class GithubProfileService {

  constructor(private _http: Http) {}

  getGithubProfile(token: string): Observable<GithubProfile> {
    const headers = token ? {authorization: `token ${token}`} : {}
    const opts = {headers: new Headers(headers)}
    return this._http.get(`https://api.github.com/user`, opts)
      .map(res => res.json())
  }

}
