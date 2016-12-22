import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from "@angular/http"
import { Observable } from "rxjs/Observable"

import { GithubIssue, GithubRepository } from "./github-issue";

function to_repository(e: GithubIssue): GithubRepository {
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

@Injectable()
export class GithubIssuesService {

  constructor(private http: Http) {}

  searchIssues(query: string): Observable<GithubIssue[]> {
    const token = localStorage.getItem("GITHUB_TOKEN")
    const headers = token ? {authorization: `token ${token}`} : {}
    const opts = {search: "q=" + query, headers: new Headers(headers)}
    return this.http.get(`https://api.github.com/search/issues`, opts)
    //return this.http.get(`./a`, opts)
      .map(res => res.json())
      .map(issues => issues.items.map(e => Object.assign(e, {repository: to_repository(e)})))
  }

}
