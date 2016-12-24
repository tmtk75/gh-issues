import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';

import { GithubIssue } from "../github-issue"

const fadeIn = trigger('fadeInState', [
  state('inactive', style({opacity: 0.1})),
  state('active', style({opacity: 1.0})),
  transition('inactive => active', animate('300ms ease-in')),
  transition('active => inactive', animate('300ms ease-out'))
])

@Component({
  selector: 'github-issue',
  templateUrl: './github-issue.component.html',
  styleUrls: ['./github-issue.component.scss'],
  animations: [fadeIn],
})
export class GithubIssueComponent implements OnInit, AfterViewInit {

  @Input() private issue: GithubIssue;
  @Output() private select = new EventEmitter();

  private fadeInState: string = "inactive";

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => this.fadeInState = "active", 0);
  }

  private onChange(src: HTMLInputElement, issue: GithubIssue): void {
    this.select.emit({selected: src.checked, issue});
  }
}
