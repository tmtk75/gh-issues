import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';

import { GithubIssue } from "../github-issue"

@Component({
  selector: 'github-issue',
  templateUrl: './github-issue.component.html',
  styleUrls: ['./github-issue.component.scss'],
  animations: [
    trigger('state', [
      state('inactive', style({
        opacity: 0.1,
      })),
      state('active', style({
        opacity: 1.0,
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-out'))
    ])
  ],
})
export class GithubIssueComponent implements OnInit, AfterViewInit {

  @Input() issue: GithubIssue;
  state: string = "inactive";

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => this.state = "active", 0);
  }
}
