import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router"

import { GithubSearchResult, GithubIssue } from "../github-issue";
import { GithubIssueEvent } from "../github-issue/github-issue-event"
import { GithubIssuesService } from "../github-issues.service";
import { AppService } from '../../app.service';

import { toPages } from "../github-pagination/github-pagination.component";

@Component({
  selector: 'github-issues',
  templateUrl: './github-issues.component.html',
  styleUrls: ['./github-issues.component.scss']
})
export class GithubIssuesComponent implements OnInit {

  form: FormGroup;
  searchResult: GithubSearchResult = {linkPage: null, linkHeader: null, issues: [], total_count: 0};
  error: Error;

  constructor(
    private _fb: FormBuilder,
    private route: ActivatedRoute,
    private _router: Router,
    private service: GithubIssuesService,
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.form = this._fb.group({
      query: [""],
      page: 3,
    });

    this.route.queryParams.forEach((params: Params) => {
      const q = params['q'];
      const page = params['page'];
      this.form.get('query').setValue(q);
      this.form.get('page').setValue(page);
      this.query(q, page)
    });
  }

  onJump(page: number) {
    this.onEnterQuery(this.form.get('query').value, page);
  }

  onEnterQuery(q: string, page: number = 1): void {
    this._router.navigate([], {queryParams: {q, page}});
  }

  query(q: string, page: number): void {
    if (!q) {
      return;
    }
    this.appService.saveLastQueryParams({q, page});
    this.service.searchIssues(q, page)
      .subscribe(result => {
        this.searchResult = result;
        this.error = null;
      }, (err) => this.error = err);
  }

  isSelected(i: GithubIssue): boolean {
    return this.appService.getSelectedIssueIDs().has(i.id);
  }

  private onSelect(e: GithubIssueEvent): void {
    if (e.selected) {
      this.appService.selectIssue(e.issue.id);
    } else {
      this.appService.unselectIssue(e.issue.id);
    }
  }
}
