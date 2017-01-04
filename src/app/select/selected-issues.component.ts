import { Component, OnInit } from '@angular/core';

import { GithubIssue } from '../github/github-issue';
import { AppService } from '../app.service';

import { List } from 'immutable'

@Component({
  selector: 'app-selected-issues',
  templateUrl: './selected-issues.component.html',
  styleUrls: ['./selected-issues.component.scss']
})
export class SelectedIssuesComponent implements OnInit {

  issues: GithubIssue[];

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.issues = this.appService.getSelectedIssues();
  }

}
