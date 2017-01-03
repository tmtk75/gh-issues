import { Set, fromJS } from "immutable";

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router"

import { GithubIssue, LinkPage, LinkHeader } from "../github-issue";
import { GithubIssueEvent } from "../github-issue/github-issue-event"
import { GithubIssuesService } from "../github-issues.service";

import { toPages } from "../github-pagination/github-pagination.component";

@Component({
  selector: 'github-issues',
  templateUrl: './github-issues.component.html',
  styleUrls: ['./github-issues.component.scss']
})
export class GithubIssuesComponent implements OnInit {

  form: FormGroup;
  issues: GithubIssue[] = [];
  selectedIssueIDs: Set<number> = Set<number>();
  error: Error;

  page: LinkPage;
  link: LinkHeader;

  constructor(
    private _fb: FormBuilder,
    private route: ActivatedRoute,
    private _router: Router,
    private service: GithubIssuesService,
  ) { }

  ngOnInit() {
    this.form = this._fb.group({
      query: [""],
      page: 3,
    });

    this.route.queryParams.forEach((params: Params) => {
      const q = params['q'];
      const page = params['page'];
      this.form.controls['query'].setValue(q);
      this.form.controls['page'].setValue(page);
      this.query(q, page)
    });

    this.selectedIssueIDs = fromJS(JSON.parse(localStorage.getItem("selectedIssueIDs"))).toSet();
  }

  onJump(page: number) {
    //this.form.controls['page'].setValue(page);
    this.onEnterQuery(this.form.controls['query'].value, page);
  }

  onEnterQuery(q: string, page: number = 1): void {
    this._router.navigate([], {queryParams: {q, page}});
  }

  query(q: string, page): void {
    if (!q) {
      return;
    }
    this.service.searchIssues(q, page)
      .subscribe(([link, page, issues]) => {
        this.issues = issues;
        this.link = link;
        this.page = page;
      }, (err) => this.error = err);
  }

  isSelected(i: GithubIssue): boolean {
    return this.selectedIssueIDs.has(i.id);
  }

  private onSelect(e: GithubIssueEvent): void {
    this.selectedIssueIDs = e.selected ?
      this.selectedIssueIDs.add(e.issue.id) :
      this.selectedIssueIDs.remove(e.issue.id);
    localStorage.setItem("selectedIssueIDs", JSON.stringify(this.selectedIssueIDs.toArray()));
  }
}
