import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { GithubProfile } from './github-profile';

@Injectable()
export class GithubProfileService {

  _profiles: {[token: string]: GithubProfile} = {};  // cache

  constructor(private _http: Http) {}

  getGithubProfile(token: string): Observable<GithubProfile> {
    if (this._profiles[token]) {
      return Observable.of(this._profiles[token]);
    }

    const headers = token ? {authorization: `token ${token}`} : {}
    const opts = {headers: new Headers(headers)}
    return this._http.get(`https://api.github.com/user`, opts)
      .map(res => {
        this._profiles[token] = res.json();
        return this._profiles[token];
      })
  }

}
