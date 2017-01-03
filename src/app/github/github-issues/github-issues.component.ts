import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router"

import { GithubIssue, LinkPage, LinkHeader } from "../github-issue";
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
  issues: GithubIssue[] = [];
  error: Error;

  page: LinkPage;
  link: LinkHeader;

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
    //this.form.get('page'])setValue(page);
    this.onEnterQuery(this.form.get('query').value, page);
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
