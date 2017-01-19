import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router"

import { GithubSearchResult, GithubIssue } from "../github-issue";
import { GithubIssueEvent } from "../github-issue/github-issue-event"
import { GithubIssuesService } from "../github-issues.service";
import { GithubProfileService } from "../github-profile.service";
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
  searchCountWidth: string = "0px";
  error: Error;

  constructor(
    private _fb: FormBuilder,
    private route: ActivatedRoute,
    private _router: Router,
    private service: GithubIssuesService,
    private profileService: GithubProfileService,
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

    const node = document.getElementById("search-form.search-count");
    new MutationObserver(mutations =>
      mutations.forEach(_ => this.searchCountWidth = `${30 + 7 + node.clientWidth}px`)  // See .scss file for `30 + 7`
    ).observe(node, {characterData: true, subtree: true});
  }

  onJump(page: number) {
    this.onEnterQuery(this.form.get('query').value, page);
  }

  onEnterQuery(q: string, page: number = 1): void {
    //this._router.navigate([], {queryParams: {q, page}});
    this.selectQuery({q, page});
  }

  private debug = false;

  query(q: string, page: number): void {
    if (!q) {
      return;
    }
    this.service.searchIssues(q, page)
      .subscribe(result => {
        this.searchResult = result;
        this.error = null;
        this.appService.saveLastQueryParams({q, page});
        if (this.debug) {
          this.focusedIssue = this.searchResult.issues[0];
        }
      }, (err) => this.error = err);
  }

  isSelected(i: GithubIssue): boolean {
    return this.appService.isSelected(i);
  }

  private onSelect(e: GithubIssueEvent): void {
    if (e.selected) {
      this.appService.selectIssue(e.issue);
    } else {
      this.appService.unselectIssue(e.issue);
    }
  }

  private selectQuery(p: Params) {
    //NOTE: I think routerLink with queryParams should work, but I couldn't.
    //  e.g) <a routerLink="/search" [queryParams]="query">...</a>
    this._router.navigate([], {queryParams: p});
  }

  onClickPredefinedQuery(e: Object) {
    const token = this.appService.getAccessToken();
    this.profileService.getGithubProfile(token).subscribe(profile => {
      const q = e['query'].replace(/<login>/g, profile.login);
      this.selectQuery({q, page: 1});
    }, (err) => this.error = err)
  }

  predefinedQueryButtons = [
    {text: "Created",   query: "is:open is:issue author:<login>"},
    {text: "Assigned",  query: "is:open is:issue assignee:<login>"},
    {text: "Mentioned", query: "is:open is:issue mentions:<login>"},
  ]

  onClickLabel(label: Object) {
    let q = `is:open is:issue label:"${label['name']}"`;
    const org = this.appService.getDefaultOrganization();
    if (org) {
      q += ` org:"${org}"`;
    }
    this.selectQuery({q});
  }

  onHover(event: any) {
    this.focusedIssue = event.issue;
    this.issueDescStyle = {display: "block"};
  }

  onHide(e: any) {
    if (!this.debug) {
      this.issueDescStyle = {display: "none"};
    }
  }

  private focusedIssue;
  private issueDescStyle: any = {} //{display: "none"};
}
