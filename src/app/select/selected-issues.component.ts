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

  issues: GithubIssue[] = [];

  constructor(
    private _http: Http,
    private _app: AppService,
    private _gh: GithubIssuesService,
  ) { }

  ngOnInit() {
    this.reload();
  }

  reload() {
    const a = this._app.getSelectedIssues().map(e => e.url);
    this._gh.getIssues(a).subscribe(e => this.issues = e);
  }

  onClickClearAll() {
    this._app.clearAllSelections();
    this.reload();
  }

}
