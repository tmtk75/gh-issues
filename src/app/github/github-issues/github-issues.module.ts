import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GithubIssuesComponent } from "./github-issues.component"
import { GithubIssuesService } from "../github-issues.service"

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
  ]
})
export class GithubIssuesModule { }
