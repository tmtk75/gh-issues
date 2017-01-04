import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from "@angular/http"

import * as Rx from 'rxjs/Rx'
import { List } from 'immutable'

import { AppService } from '../app.service';
import { GithubIssue, GithubRepository, LinkHeader, LinkPage, GithubSearchResult } from "./github-issue";

function toRepository(e: GithubIssue): GithubRepository {
  const [ full_name, name ] = [-2, -1].map(i => e.repository_url.split("/").slice(i).join("/"))
  return {
    id: -1,
    owner: {
      login: full_name.split("/")[0],
      id: null,
      avatar_url: null,
      html_url: null,
    },
    full_name,
    name,
  }
}

export function parseLinkHeader(link: string): LinkHeader {
  if (!link) {
    return {first: "?page=1"};
  }
  return link.split(",").map(e => e.split(";"))
    .map(([url, rel]) => [rel.match(`rel="(.*)"`)[1], url.match("<(.*)>")[1]])
    .map(([key, url]) => ({[key]: url}))
    .reduce((a, b) => Object.assign(a, b))
}

export function parsePage(h: LinkHeader): LinkPage {
  const f = (s) => s ? parseInt(s[1]) : null;
  return Object.keys(h).map(k => ({[k]: f(h[k].match("\\??&?page=([0-9]+)&?"))}))
    .reduce((a, b) => Object.assign(a, b));
}

@Injectable()
export class GithubIssuesService {

  constructor(
    private http: Http,
    private _app: AppService,
  ) {}

  searchIssues(query: string, page: number): Rx.Observable<GithubSearchResult> {
    const token = this._app.getAccessToken();
    const headers = token ? {authorization: `token ${token}`} : {}
    const opts = {search: `q=${query}&page=${page}`, headers: new Headers(headers)}
    return this.http.get(`https://api.github.com/search/issues`, opts)
      .map(res => [parseLinkHeader(res.headers.get("link")), res.json()])
      .map(([link, issues]) => [link, parsePage(link), issues])
      .map(([link, page, issues]) => ({
        linkHeader: link,
        linkPage: page,
        total_count: issues.total_count,
        issues: issues.items.map(e => Object.assign(e, {repository: toRepository(e)})),
      }))
  }

  getIssues(urls: string[]): Rx.Observable<GithubIssue[]> {
    const token = this._app.getAccessToken();
    const headers = token ? {authorization: `token ${token}`} : {};
    return Rx.Observable.from(urls)
      .map(url => this.http.get(url, {headers: new Headers(headers)}))
      .flatMap(e => e.map(res => res.json()))
      .map(e => Object.assign(e, {repository: toRepository(e)}))
      .reduce((a, b) => a.push(b), List())
      .map(e => e.toJS())
  }

}
