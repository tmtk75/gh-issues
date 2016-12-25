import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GithubIssuesComponent } from "./github-issues.component"
import { GithubIssueComponent } from "../github-issue/github-issue.component"
import { GithubIssuesService } from "../github-issues.service"

import { FromNowPipe } from '../github-issue/from-now.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    GithubIssuesService,
  ],
  declarations: [
    GithubIssuesComponent,
    GithubIssueComponent,
    FromNowPipe,
  ]
})
export class GithubIssuesModule { }
