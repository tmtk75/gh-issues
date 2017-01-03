import { Injectable } from '@angular/core';
import { Params } from '@angular/router';

import { GithubIssue } from "./github/github-issue";

import { Set, List, fromJS } from "immutable";

@Injectable()
export class AppService {

  getAccessToken(): string {
    return localStorage.getItem("GITHUB_TOKEN");
  }

  saveAccessToken(token: string) {
    localStorage.setItem("GITHUB_TOKEN", token);
  }

  selectIssue(issue: GithubIssue) {
    const s = this.getSelectedIssueIDs();
    localStorage.setItem("selectedIssueIDs", JSON.stringify(s.add(issue.id).toArray()));

    const id2issue = JSON.parse(localStorage.getItem("selectedID2issue") || '{}');
    id2issue[issue.id] = {id: issue.id, url: issue.url};
    localStorage.setItem("selectedID2issue", JSON.stringify(id2issue));
  }

  unselectIssue(issue: GithubIssue) {
    const s = this.getSelectedIssueIDs();
    localStorage.setItem("selectedIssueIDs", JSON.stringify(s.remove(issue.id).toArray()));

    const id2issue = JSON.parse(localStorage.getItem("selectedID2issue") || '{}');
    delete id2issue[issue.id];
    localStorage.setItem("selectedID2issue", JSON.stringify(id2issue));
  }

  private getSelectedIssueIDs(): Set<number> {
    return fromJS(JSON.parse(localStorage.getItem("selectedIssueIDs")) || []).toSet();
  }

  getSelectedIssues(): Map<string, GithubIssue> {
    return fromJS(JSON.parse(localStorage.getItem("selectedID2issue")) || {});
  }

  saveLastQueryParams(params: Params) {
    const h = this.getQueryHistory();
    if ((h.first() || {})['q'] == params['q']) {
      return;
    }
    const n = h.unshift(params).slice(0, 10);
    localStorage.setItem("queryHistory", JSON.stringify(n.toJS()));
  }

  getLastQueryParams(): Params {
    return this.getQueryHistory().first() || {};
  }

  getQueryHistory(): List<Params> {
    return List(JSON.parse(localStorage.getItem("queryHistory")) || []);
  }

  getDefaultOrganization(): string {
    return localStorage.getItem("defaultOrganization");
  }

  saveDefaultOrganization(org: string) {
    localStorage.setItem("defaultOrganization", org);
  }
}
