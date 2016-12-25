import { Set, fromJS } from "immutable";

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router"

import { GithubIssue } from "../github-issue";
import { GithubIssueEvent } from "../github-issue/github-issue-event"
import { GithubIssuesService } from "../github-issues.service";

@Component({
  selector: 'github-issues',
  templateUrl: './github-issues.component.html',
  styleUrls: ['./github-issues.component.scss']
})
export class GithubIssuesComponent implements OnInit {

  form: FormGroup;
  issues: GithubIssue[] = [];
  selectedIssueIDs: Set<number> = Set<number>();

  constructor(
    private _fb: FormBuilder,
    private route: ActivatedRoute,
    private _router: Router,
    private service: GithubIssuesService,
  ) { }

  ngOnInit() {
    this.form = this._fb.group({
      query: [""],
    });

    this.route.queryParams.forEach((params: Params) => {
      const q = params['q']
      this.form.controls['query'].setValue(q);
      this.query(q)
    });

    this.selectedIssueIDs = fromJS(JSON.parse(localStorage.getItem("selectedIssueIDs"))).toSet();
  }

  onClick(issue: GithubIssue): boolean {
    this.onEnterQuery(`is:issue is:open author:${issue.user.login}`)
    return false
  }

  onEnterQuery(q: string): void {
    this._router.navigate([], {queryParams: {q}});
  }

  query(q: string): void {
    if (!q) {
      return;
    }
    this.service.searchIssues(q)
      //.map(e => e.slice(1, 2))
      //.do(console.log)
      .subscribe(it => this.issues = it)
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