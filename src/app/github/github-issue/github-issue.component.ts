import * as Color from "color";

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
  @Input() private selected: boolean;
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

  private labelColor(hexColor: string): string {
    const c = Color('#' + hexColor);
    const w = Color('white');
    const p = (luminanace(w) + 0.05)/(luminanace(c) + 0.05);
    return p <= 4 ? "#1c2733" : "white";
  }
}

function luminanace(c: Color.Color): number {
  const a = c.rgbArray().map((v) => {
    v /= 255;
    return (v <= 0.03928) ?
      v / 12.92 :
      Math.pow(((v+0.055)/1.055), 2.4);
    });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}