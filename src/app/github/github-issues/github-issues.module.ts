import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GithubIssuesComponent } from "./github-issues.component"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    GithubIssuesComponent,
  ]
})
export class GithubIssuesModule { }
