import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { LinkHeader, LinkPage } from "../github-issue";

@Component({
  selector: 'github-pagination',
  templateUrl: './github-pagination.component.html',
  styleUrls: ['./github-pagination.component.scss']
})
export class GithubPaginationComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() page: LinkPage;
  @Input() link: LinkHeader;
  @Output() jump = new EventEmitter();

  private current: number;
  private leftItems: number[] = [];
  private omitLeft: boolean = false;
  private pages: number[] = [];
  private omitRight: boolean = false;
  private rightItems: number[] = [];
  private hasNoPrevious = true;
  private hasNoNext = true;

  ngOnInit() {
  }

  ngOnChanges() {
    if (!(this.page && this.link)) {
      return;
    }
    this.current = (this.page.next - 1) || (this.page.prev + 1)
    const e = omit(toPages(this.page), this.current - 1, 2, 2);
    this.leftItems = e.leftItems;
    this.omitLeft = e.omittedLeft;
    this.pages = e.items;
    this.omitRight = e.omittedRight;
    this.rightItems = e.rightItems;
    this.hasNoPrevious = !this.page.prev;
    this.hasNoNext = !this.page.last;
  }

  onClick(p: number) {
    this.jump.emit(p);
  }

}

function range(f: number, t: number): number[] {
  const a = [];
  for (let i = f; i < t; i++) a.push(i);
  return a;
}

export function toPages(page: LinkPage): number[] {
  const first = page.first || page.next - 1;
  const last = page.last || page.prev + 1;
  return range(first, last + 1);
}

function omit(array, pivot, num, extra): {items: number[], omittedLeft: boolean, omittedRight: boolean, leftItems: number[], rightItems: number[]} {
  if (array.length <= (num*2 + 1)) {
    return {
      items: array,
      omittedLeft: false,
      omittedRight: false,
      leftItems: [],
      rightItems:[],
    }
  }
  var l = pivot - num >= 0 ? pivot - num : 0;
  var r = num + (l + 1) + num;
  if (r > array.length) {
    l = array.length - num*2 - 1
    r = array.length
  }
  var lo = extra < l;
  var ro = r < (array.length - extra);
  return {
    items: array.slice(l, r),
    omittedLeft: lo,
    omittedRight: ro,
    leftItems: array.slice(0, Math.min(extra, l)),
    rightItems: array.slice(Math.max(array.length - extra, r), array.length),
  }
}