import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";

import { GithubIssue } from "../github-issue";

@Component({
  selector: 'github-issues',
  templateUrl: './github-issues.component.html',
  styleUrls: ['./github-issues.component.css']
})
export class GithubIssuesComponent implements OnInit {

  form: FormGroup;
  issues: GithubIssue[] = [];

  constructor(
    private _fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this._fb.group({
      query: [""],
    });
  }

  onEnterQuery(query: string) {
    console.log(query);
  }

}
