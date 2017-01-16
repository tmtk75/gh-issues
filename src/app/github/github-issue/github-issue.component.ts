import * as Rx from 'rxjs';
import * as Color from "color";

import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';
import { HostListener, ElementRef, ViewChild } from '@angular/core';

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
  @Output() private clickLabel = new EventEmitter();
  @Output() private hover = new EventEmitter();
  @Output() private hide = new EventEmitter();

  private fadeInState: string = "inactive";

  @ViewChild('title') titleRef: ElementRef;

  ngOnInit() {
    const t = this.titleRef.nativeElement
    const enter = Rx.Observable.fromEvent(t, "mouseenter")
    const leave = Rx.Observable.fromEvent(t, "mouseleave")
    const move  = Rx.Observable.fromEvent(t, "mousemove")
    const entered = enter.map(e => true).merge(leave.map(e => false))
    const hover = Rx.Observable.combineLatest(move, entered)
      .debounceTime(500)
      .filter(([e, b]) => b)
      .map(([e, _]) => e)

    hover.subscribe(e => this.hover.emit({issue: this.issue, event: e}));
    leave.subscribe(e => this.hide.emit({issue: this.issue, event: e}))
  }

  // @HostListener('document:keyup', ['$event'])
  // @HostListener('document:keydown', ['$event'])
  // onKeyUp(ev:KeyboardEvent) {
  //   console.log(`The user just pressed ${ev.key}!`);
  // }

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

  onClickLabel(label: Object) {
    this.clickLabel.emit(label);
  }
}

function luminanace(c: Color.Color): number {
  const a = c.array().map((v) => {
    v /= 255;
    return (v <= 0.03928) ?
      v / 12.92 :
      Math.pow(((v+0.055)/1.055), 2.4);
    });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
