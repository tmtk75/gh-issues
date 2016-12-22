import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router"

import { GithubIssue } from "../github-issue";

import { GithubIssuesService } from "../github-issues.service";

@Component({
  selector: 'github-issues',
  templateUrl: './github-issues.component.html',
  styleUrls: ['./github-issues.component.scss']
})
export class GithubIssuesComponent implements OnInit {

  form: FormGroup;
  issues: GithubIssue[] = [];

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
    })
  }

  onClick(issue: GithubIssue): boolean {
    this.onEnterQuery(`is:issue is:open author:${issue.user.login}`)
    return false
  }

  onEnterQuery(q: string) {
    this._router.navigate([], {queryParams: {q}});
    this.query(q);
  }

  query(q: string) {
    if (!q) {
      return;
    }
    this.service.searchIssues(q)
      //.map(e => e.slice(1, 2))
      //.do(console.log)
      .subscribe(it => this.issues = it)
  }

}
