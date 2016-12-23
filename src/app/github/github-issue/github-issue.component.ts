import { Component, OnInit, Input } from '@angular/core';

import { GithubIssue } from "../github-issue"

@Component({
  selector: 'github-issue',
  templateUrl: './github-issue.component.html',
  styleUrls: ['./github-issue.component.scss']
})
export class GithubIssueComponent implements OnInit {

  @Input() issue: GithubIssue;

  constructor() { }

  ngOnInit() {
  }

}
