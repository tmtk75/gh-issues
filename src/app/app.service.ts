import { Injectable } from '@angular/core';
import { Params } from '@angular/router';

import { Set, List, fromJS } from "immutable";

@Injectable()
export class AppService {

  getAccessToken(): string {
    return localStorage.getItem("GITHUB_TOKEN");
  }

  saveAccessToken(token: string) {
    localStorage.setItem("GITHUB_TOKEN", token);
  }

  selectIssue(id: number) {
    const s = this.getSelectedIssueIDs();
    localStorage.setItem("selectedIssueIDs", JSON.stringify(s.add(id).toArray()));
  }

  unselectIssue(id: number) {
    const s = this.getSelectedIssueIDs();
    localStorage.setItem("selectedIssueIDs", JSON.stringify(s.remove(id).toArray()));
  }

  getSelectedIssueIDs(): Set<number> {
    return fromJS(JSON.parse(localStorage.getItem("selectedIssueIDs"))).toSet();
  }

  saveLastQueryParams(params: Params) {
    const h = this.getQueryHistory();
    if ((h.first() || {})['q'] == params['q']) {
      return;
    }
    const n = h.unshift(params).slice(0, 5);
    localStorage.setItem("queryHistory", JSON.stringify(n.toJS()));
  }

  getLastQueryParams(): Params {
    return this.getQueryHistory().first() || {};
  }

  getQueryHistory(): List<Params> {
    return List(JSON.parse(localStorage.getItem("queryHistory")) || []);
  }

}
