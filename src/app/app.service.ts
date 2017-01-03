import { Injectable } from '@angular/core';
import { Params } from '@angular/router';

import { Set, fromJS } from "immutable";

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

  private lastQueryParams: Params = {};

  saveLastQueryParams(params: Params) {
    this.lastQueryParams = params;
  }

  getLastQueryParams(): Object {
    return this.lastQueryParams;
  }

}
