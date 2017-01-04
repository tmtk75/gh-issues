import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { GithubIssue } from '../github/github-issue';
import { AppService } from '../app.service';
import { GithubIssuesService } from '../github/github-issues.service';

import * as Rx from 'rxjs/Rx'
import { List } from 'immutable'

@Component({
  selector: 'app-selected-issues',
  templateUrl: './selected-issues.component.html',
  styleUrls: ['./selected-issues.component.scss']
})
export class SelectedIssuesComponent implements OnInit {

  issues: GithubIssue[];

  constructor(
    private _http: Http,
    private _app: AppService,
    private _gh: GithubIssuesService,
  ) { }

  ngOnInit() {
    const a = this._app.getSelectedIssues().map(e => e.url);
    const token = this._app.getAccessToken();
    const headers = token ? {authorization: `token ${token}`} : {};

    Rx.Observable.from(a)
      .map(url => this._http.get(url, {headers: new Headers(headers)}))
      .flatMap(e => e.map(res => res.json()))
      .reduce((a, b) => a.push(b), List())
      .map(e => e.toJS())
      .subscribe(e => this.issues = e)
  }

}
